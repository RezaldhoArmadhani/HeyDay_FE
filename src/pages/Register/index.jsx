import InputFormAuth from "@/Components/Form/InputFormAuth";
import Link from "next/link";
import style from "../../Components/LayoutAuth/style.module.css";
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
    company_name: "",
    position: "",
    password: "",
    phone: "",
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
        .post("http://localhost:4000/recruiters/register", {
          ...data,
          password: passwordValidated,
        })
        .then((response) => {
          toast.success("Success Registration !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.log(response);
          router.push("/Login");
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
      title="HeyPeople!"
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
          title="Company"
          value={data.perusahaan}
          name="company_name"
          type="text"
          onchange={(e) => changeHandler(e)}
        />
        <InputFormAuth
          title="Position"
          value={data.jabatan}
          name="position"
          type="text"
          onchange={(e) => changeHandler(e)}
        />
        <InputFormAuth
          title="Phone Number"
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

        {/* <div className="form-check mb-3 customCheck">
          <input className="form-check-input" type="checkbox" value="" id={style.flexCheckDefault} />
          <label className={`form-check-label ${style.formLabel}`} for={style.flexCheckDefault}>
            I agree to terms & conditions
          </label>
        </div> */}
        <div className="d-grid mb-2 mt-3">
          <button
            className={`btn ${style.btn} text-light`}
            type="submit" /* disabled={!(checkTerms && data.name && data.email && data.password && data.phone_number)} */
          >
            Register
          </button>
        </div>
      </form>
      <div className={`loginLink text-center mt-3 ${style.formLabel}`}>
        <p>
          Already have an account?{" "}
          <Link
            href={"/Login"}
            style={{ textDecoration: "none", color: "rgb(239, 200, 26)" }}
          >
            {" "}
            Login Here
          </Link>
        </p>
      </div>
      <ToastContainer />
    </AuthLayout>
  );
};

export default Register;
