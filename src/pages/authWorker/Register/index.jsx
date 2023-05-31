import InputFormAuth from "@/Components/Form/InputFormAuth";
import Link from "next/link";
import style from "@/Components/LayoutAuth/style.module.css";
import AuthLayout from "@/Components/LayoutAuth";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const router = useRouter();
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  function checkPasswordMatch(password) {
    if (password != passwordConfirm) {
      throw toast.error("Password not match!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    return password;
  }

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const passwordValidated = await checkPasswordMatch(data.password);
      axios
        .post("https://heydaybe-production.up.railway.app/workers/register", {
          ...data,
          password: passwordValidated,
        })
        .then((response) => {
          toast.success("Success Registration !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.log(response);
          router.push("/authWorker/Login");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthLayout
      title="Halo, Pewpeople!"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor."
    >
      <form onSubmit={handleSubmit}>
        <InputFormAuth
          title="Name"
          name="name"
          value={data.name}
          type="text"
          onchange={(e) => changeHandler(e)}
          req={"required"}
        />
        <InputFormAuth
          title="Email Address"
          value={data.email}
          name="email"
          type="text"
          onchange={(e) => changeHandler(e)}
          req={"required"}
        />
        <InputFormAuth
          title="No Handphone"
          value={data.phone_number}
          name="phone"
          type="number"
          onchange={(e) => changeHandler(e)}
        />
        <InputFormAuth
          title="Password"
          name="password"
          value={data.password}
          type="password"
          onchange={(e) => changeHandler(e)}
          req={"required"}
        />
        <InputFormAuth
          title="Confirm Password"
          name="confirmPassword"
          type="password"
          onchange={(e) => setPasswordConfirm(e.target.value)}
          req={"required"}
        />

        <div className="d-grid mb-2 mt-3">
          <button className={`btn ${style.btn} text-light`} type="submit">
            Register
          </button>
        </div>
      </form>
      <div className={`loginLink text-center mt-3 ${style.formLabel}`}>
        <p>
          Already have account?{" "}
          <Link
            href={"/authWorker/Login"}
            style={{ textDecoration: "none", color: "rgb(239, 200, 26)" }}
          >
            {" "}
            Log in Here
          </Link>
        </p>
      </div>
      <ToastContainer />
    </AuthLayout>
  );
};

export default Register;
