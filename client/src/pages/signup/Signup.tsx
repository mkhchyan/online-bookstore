import { zodResolver } from "@hookform/resolvers/zod" 
import { SubmitHandler, useForm} from "react-hook-form" 
import { useDispatch } from "react-redux" 
import { signup } from "../../auth/authSlice" 
import { Link, useNavigate } from "react-router-dom"  
import { type ValidationSchema, validationSchema } from "./validation"  
import { Button } from "../../components"



const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })  

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    dispatch(signup(data))  
    reset() 
    navigate("/login")
  }

  return (
    <section className="w-full">
      <div className="mx-auto w-[90%] flex flex-col items-center justify-center lg:flex-row">
        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
          <img
            src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1687626011~exp=1687626611~hmac=02ab425f01379df7acbdae56542596eaeb77e8021251e884ea3d8c23b46a70e4"
            className="w-full"
            alt="signup image"
          />
        </div>

        <div className="w-full">
          <h1 className="uppercase text-rose-700 text-3xl text-left mx-auto font-bold mb-8 tracking-wide w-[60%]">Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-auto flex w-[60%] flex-col gap-4">
              <div className="gap-4 md:flex">
                <div className="w-full">
                  <label
                    className="mb-2 block text-sm font-bold text-gray-700"
                    htmlFor="firstName"
                  >
                    Firstname
                  </label>
                  <input
                    className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none ${
                      errors.firstname ? "border-red-500" : "focus:border-blue-600"
                    }`}
                    id="firstName"
                    type="text"
                    placeholder="Firstname*"
                    {...register("firstname", { required: true })}
                  />
                  {errors.firstname && (
                    <p className="text-red-500 text-sm">
                      {errors.firstname.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label
                    className="mb-2 block text-sm font-bold text-gray-700"
                    htmlFor="lastName"
                  >
                    Lastname
                  </label>
                  <input
                    className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none ${
                      errors.lastname ? "border-red-500" : "focus:border-blue-600"
                    }`}
                    id="lastName"
                    type="text"
                    placeholder="Lastname*"
                    {...register("lastname", { required: true })}
                  />
                  {errors.lastname && (
                    <p className="text-red-500 text-sm">
                      {errors.lastname.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none ${
                    errors.email ? "border-red-500" : "focus:border-blue-600"
                  }`}
                  id="email"
                  type="email"
                  placeholder="Email*"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="gap-4 md:flex">
                <div className="w-full">
                  <label
                    className="mb-2 block text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none ${
                      errors.password ? "border-red-500" : "focus:border-blue-600"
                    }`}
                    id="password"
                    type="password"
                    placeholder="Password*"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label
                    className="mb-2 block text-sm font-bold text-gray-700"
                    htmlFor="c_password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:border-blue-600 focus:outline-none`}
                    id="c_password"
                    type="password"
                    placeholder="Confirm password*"
                  />
                </div>
              </div>
              <div className="m-auto flex w-full flex-col items-center overflow-hidden">
                <Button
                  type="submit"
                  className="text-md w-full rounded border-none bg-gradient-to-t from-rose-700 to-rose-500 px-14 py-2 text-center uppercase text-white outline-none"
                >
                  Sign Up
                </Button>
              </div>

              <div className="my-4 border-b text-center">
                <div className="inline-block translate-y-1/2 transform bg-white px-2 text-sm font-medium leading-none tracking-wide text-gray-600">
                  Or
                </div>
              </div>
              <div className="mx-auto flex w-full flex-col items-center overflow-hidden">
                <Button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                  <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    className="w-6 h-6"
                    alt=""
                  />
                  <span className="dark:text-gray-300">
                    Signup with Google
                  </span>
                </Button>
              </div>
            </div>
            <div className="mx-auto mt-4 w-[60%] text-left text-sm">
              Already have an account?
              <Link
                to="/login"
                className="ml-1 cursor-pointer underline hover:text-rose-700"
              >
                Login!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  ) 
} 

export default Signup 
