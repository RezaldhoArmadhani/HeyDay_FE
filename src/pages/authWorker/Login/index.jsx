import InputFormAuth from "@/Components/Form/InputFormAuth";
import Link from "next/link";
import style from "@/Components/LayoutAuth/style.module.css";
import LayoutAuth from "@/Components/LayoutAuth";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await axios.post('http://localhost:3020/login', { email, password});

  //   localStorage.setItem('user', 'user');

  //   if (localStorage.getItem('user')) {

  //       alert('success')
  //       router.push('/')
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `https://heydaybe-production.up.railway.app/workers/login`,
      {
        email,
        password,
      }
    );
    // console.log(response);
    // console.log(response.data.data.token);

    try {
      if (response.data.status === "success") {
        swal({
          title: response.data.message,
          icon: "success",
        });
        const token = response.data.data.token;
        const id = response.data.data.id_worker;
        const role = response.data.data.role;
        // const image = response.data.data.image;

        localStorage.setItem("token", token);
        localStorage.setItem("id", id);
        localStorage.setItem("role", role);
        // localStorage.setItem('image', image);

        router.push("/");
      } else {
        swal({
          title: response.data.message,
          icon: "error",
        });
      }
    } catch (error) {
      swal({
        title: error,
        icon: "error",
      });
    }
  };

  return (
    <LayoutAuth
      title="Welcome"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor."
    >
      <form onSubmit={handleSubmit}>
        <InputFormAuth
          title="Email"
          name="email"
          value={email}
          type="email"
          onchange={(e) =>
            setEmail(e.target.value, console.log(e.target.value))
          }
        />
        <InputFormAuth
          title="Password"
          name="password"
          value={password}
          type="password"
          onchange={(e) => setPassword(e.target.value)}
        />

        <div className="d-grid mb-2 mt-3 text-light">
          <button className={`btn ${style.btn} text-light`} type="submit">
            Login
          </button>
        </div>
      </form>
      <div className="forgotPassword text-end mb-3">
        <Link
          to={"/forgot-password"}
          className={`link-dark text-decoration-none ${style.formLabel}`}
          style={{ fontSize: "14px" }}
          href=""
        >
          Forgot Password?
        </Link>
      </div>
      <div className={`loginLink text-center mt-3 ${style.formLabel}`}>
        <p>
          Don’t have an account?{" "}
          <Link
            href={"/authWorker/Register"}
            style={{ textDecoration: "none", color: "rgb(88, 85, 173)" }}
          >
            {" "}
            Register Worker Here
          </Link>
        </p>
      </div>
    </LayoutAuth>
  );
};

export default Login;
