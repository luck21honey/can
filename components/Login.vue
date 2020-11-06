<template>
<div class="min-h-screen bg-white flex">
    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="mx-auto w-full max-w-sm lg:w-96">
            <div>
                <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
                <h2 class="mt-6 text-3xl leading-9 font-extrabold text-gray-900">
                    Sign in to your account
                </h2>
                <p class="mt-2 text-sm leading-5 text-gray-600 max-w">
                    Or No acount?
                    <nuxt-link to="/register" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                        Sign Up
                    </nuxt-link>
                </p>
            </div>

            <div class="mt-8">
                <div>
                    <div>
                        <p class="text-sm leading-5 font-medium text-gray-700">
                            Sign in with
                        </p>

                        <div class="mt-1 grid grid-cols-3 gap-3">
                            <div>
                                <span class="w-full inline-flex rounded-md shadow-sm">
                                    <button @click="googleSignIn" type="button" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out" aria-label="Sign in with Google">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" width="24px" height="24px">
                                            <path clip-rule="evenodd" fill-rule="evenodd" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                                        </svg>
                                    </button>
                                </span>
                            </div>

                            <div>
                                <span class="w-full inline-flex rounded-md shadow-sm">
                                    <button type="button" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out" aria-label="Sign in with Facebook">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </span>
                            </div>

                            <div>
                                <span class="w-full inline-flex rounded-md shadow-sm">
                                    <button type="button" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out" aria-label="Sign in with Twitter">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </button>
                                </span>
                            </div>

                            <div>
                                <span class="w-full inline-flex rounded-md shadow-sm">
                                    <button type="button" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out" aria-label="Sign in with Apple">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 48 48" width="24px" height="24px">
                                            <path d="M32.5,44c-1.778,0-3.001-0.577-4.08-1.086C27.38,42.424,26.481,42,25,42s-2.38,0.424-3.42,0.914	C20.501,43.423,19.278,44,17.5,44C13.174,44,6,34.071,6,23.5C6,16.49,10.832,11,17,11c2.027,0,3.259,0.581,4.346,1.093	C22.378,12.58,23.27,13,25,13s2.622-0.42,3.654-0.907C29.741,11.581,30.973,11,33,11c2.664,0,5.033,0.982,7.042,2.921	c0.338,0.326,0.504,0.793,0.447,1.26s-0.329,0.88-0.735,1.116C37.438,17.644,36,20.499,36,23.75c0,3.661,2.004,6.809,4.986,7.831	c0.391,0.134,0.709,0.423,0.879,0.799c0.171,0.375,0.18,0.805,0.023,1.188C39.461,39.515,35.424,44,32.5,44z" />
                                            <path d="M25.5,10c-0.358,0-0.708-0.128-0.984-0.368c-0.363-0.316-0.554-0.788-0.51-1.269c0.012-0.123,0.303-3.045,2.593-5.382l0,0	c2.154-2.2,4.251-2.854,4.482-2.922c0.489-0.142,1.017-0.026,1.401,0.308c0.385,0.333,0.574,0.839,0.503,1.344	c-0.034,0.241-0.389,2.436-2.232,4.899c-1.973,2.636-4.791,3.322-4.91,3.35C25.729,9.987,25.614,10,25.5,10z" />
                                            <path d="M25.5,10c-0.358,0-0.708-0.128-0.984-0.368c-0.363-0.316-0.554-0.788-0.51-1.269c0.012-0.123,0.303-3.045,2.593-5.382l0,0	c2.154-2.2,4.251-2.854,4.482-2.922c0.489-0.142,1.017-0.026,1.401,0.308c0.385,0.333,0.574,0.839,0.503,1.344	c-0.034,0.241-0.389,2.436-2.232,4.899c-1.973,2.636-4.791,3.322-4.91,3.35C25.729,9.987,25.614,10,25.5,10z" />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                        </div>
                        <div class="relative flex justify-center text-sm leading-5">
                            <span class="px-2 bg-white text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>
                </div>

                <div class="mt-6">
                    <form class="space-y-6">
                        <div>
                            <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
                                Email address
                            </label>
                            <div class="mt-1 rounded-md shadow-sm">
                                <input v-model="email" id="email" type="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>

                        <div>
                            <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
                                Password
                            </label>
                            <div class="mt-1 rounded-md shadow-sm">
                                <input v-model="password" id="password" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input id="remember_me" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                                <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div class="text-sm leading-5">
                                <nuxt-link to="/forgot-password" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                    Forgot your password?
                                </nuxt-link>
                            </div>
                        </div>

                        <div>
                            <span class="block w-full rounded-md shadow-sm">
                                <button @click.stop.prevent="handleSignIn" type="button" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                    Sign in
                                </button>
                                <!-- <nuxt-link to="/home" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                    Sign in
                                </nuxt-link> -->
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <p class="text-center text-gray-500 text-xs mt-3">
            &copy;2020 Acme Corp. All rights reserved.
        </p>
    </div>

    <div class="hidden lg:block relative w-0 flex-1">
        <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="" />
    </div>
</div>
</template>

<style>
</style>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        handleSignIn(err) {
            var user = {
                email: this.email,
                password: this.password
            };
            this.$store
                .dispatch('signInWithEmail', user)
                .then(() => {
                    this.email = "";
                    this.password = "";
                    this.$router.push('/home');
                })
                .catch(err => {
                    alert(err.message)
                })
        },

        googleSignIn() {
            this.$store
                .dispatch('signInWithGoogle')
                .then((result) => {
                    console.log('google auth result>>>', result)
                    this.$router.push('/home');
                })
                .catch(e => {
                    this.$snotify.error(e.message)
                    alert(e.message)
                })
        }
    }
}
</script>>
