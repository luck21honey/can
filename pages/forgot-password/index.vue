<template>
<div class="min-h-screen bg-white flex">
    <div class="hidden lg:block relative w-0 flex-1">
        <img class="absolute inset-0 h-full w-full object-cover" src="https://source.unsplash.com/oWTW-jNGl9I/600x800" alt="" />
    </div>

    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="mx-auto w-full max-w-sm lg:w-96">
            <div class="px-8 mb-4 text-center">
                <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
                <h2 class="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
                    Forgot Your Password?
                </h2>
                <p class="mt-2 text-sm leading-5 text-gray-600 max-w">
                    We get it, stuff happens. Just enter your email address below and
                    we'll send you a link to reset your password!
                </p>
            </div>

            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div class="mb-4">
                    <label class="block text-sm font-medium leading-5 text-gray-700" for="email">
                        Email
                    </label>
                    <input id="email" type="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="Enter Email Address..." />
                </div>
                <div class="mb-6 text-center">
                    <button class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline" type="button">
                        Reset Password
                    </button>
                </div>

                <hr class="mb-6 border-t" />

                <div class="text-center">
                    <nuxt-link class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150" to="/register">
                        Create an Account
                    </nuxt-link>
                </div>
                <div class="text-center">
                    <nuxt-link class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150" to="/">
                        Already have an account? Sign in
                    </nuxt-link>
                </div>
            </form>

            <p class="text-center text-gray-500 text-xs mt-3">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>
    </div>
</div>
</template>
