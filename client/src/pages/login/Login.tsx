import { useForm} from "react-hook-form"
import { useDispatch } from "react-redux"
import { login } from "../../auth/authSlice"
import { ValidationSchema, validationSchema } from "./validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  })

  const onSubmit = (data: any) => {
    dispatch(login(data))
    console.log(data)
      navigate("/")
  }

  return (
    <section className="w-full">
      <div className="mx-auto w-[90%] flex flex-col items-center justify-center lg:flex-row">
        <div className="w-full">
        <h1 className="uppercase text-rose-700 text-3xl text-left mx-auto font-bold mb-8 tracking-wide w-[60%]">Sign in</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-auto flex w-[60%] flex-col gap-4">
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
              </div>
              <div className="m-auto flex w-full flex-col items-center overflow-hidden">
                <Button
                  type="submit"
                  className="text-md w-full rounded border-none bg-gradient-to-t from-rose-700 to-rose-500 px-14 py-2 text-center uppercase text-white outline-none"
                >
                  Sign in
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
          <img
            src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg?w=740&t=st=1687628207~exp=1687628807~hmac=9ea4aa86318e64af5115117558608925ae55486cf284b9e57690ec5577055fff"
            className="w-full"
            alt="login image"
          />
        </div>

      </div>
    </section>
  )
}

export default Login
