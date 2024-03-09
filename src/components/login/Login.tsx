import { useState } from "react";
import { useForm } from 'react-hook-form';
import userData from "../../data/users.json";

export interface AuthLogin{
    email?:string;
    password?:string;
}

const Login = () => {

    const {register, handleSubmit, formState:{errors}} = useForm<AuthLogin>();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const onSubmit = (data: AuthLogin) => {
        const user = userData.find(user => user.email === data.email && user.password === data.password);
        if (user) {
            setIsLoggedIn(true);
        } else {
            setIsModalOpen(true);
        }
    }

    if (isLoggedIn) {
        window.location.href="/";
    }

    return (
        <section className="bg-gray-50 ligth:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-25 h-20 mr-2" src="src/assets/logo_Disney.png" alt="logo" />
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                                    placeholder="name@company.com"
                                    {...register("email",{
                                        required: 'Por favor ingrese su correo electronico',
                                        pattern:{
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message:'Por favor ingrese un correo electronico valido.'
                                        }
                                    })}
                                />
                                {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.password ? 'border-red-500' : ''}`}
                                    {...register("password",{
                                        required:'Por favor ingrese una contraseña'
                                    })}
                                />
                                {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div id="popup-modal" className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-gray-900 bg-opacity-50">
                    <div className="relative p-4 bg-white rounded-lg shadow">
                        <button
                            type="button"
                            className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full w-8 h-8 flex items-center justify-center"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M11.293 10l4.146-4.146a.5.5 0 0 0-.708-.708L10.586 9 6.44 4.854a.5.5 0 1 0-.708.708L9.293 10l-4.147 4.146a.5.5 0 1 0 .708.708L10.586 11l4.146 4.146a.5.5 0 1 0 .708-.708L11.293 10z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="p-4 text-center">
                            <h3 className="mb-5 text-lg font-normal text-gray-500">Error</h3>
                            <p className="text-sm text-red-600">Por favor corrija los errores en el formulario</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Login;

