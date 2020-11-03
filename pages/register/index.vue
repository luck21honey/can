<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
          alt="Workflow"
        />
        <h2
          class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
        >
          Sign Up
        </h2>
      </div>
      <form
        class="mt-8 bg-white p-8 rounded-md shadow-md"
        action="#"
        method="POST"
      >
        <div class="rounded-md shadow-sm">
          <div>
            <label
              class="block text-sm leading-5 text-gray-900 mb-1"
              for="fullname"
            >
              Full Name
            </label>
            <input
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 mb-3"
              id="fullname"
              type="text"
              name="fullname"
              value="Jane Doe"
            />
          </div>
          <div>
            <label
              class="block text-sm leading-5 text-gray-900 mb-1"
              id="email"
            >
              Email address
            </label>
            <input
              aria-label="Email address"
              name="email"
              type="email"
              id="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 mb-3"
              placeholder="Email address"
            />
          </div>
          <div>
            <label
              class="block text-sm leading-5 text-gray-900 mb-1"
              for="password"
            >
              Password
            </label>
            <input
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 mb-3"
              id="password"
              name="password"
              type="password"
              placeholder="******************"
            />
          </div>

          <div class="mt-6">
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Create Account
            </button>
          </div>
        </div>

        <hr />

        <div class="mt-8">
          <p class="text-center or-continue-with">
            <span>Or continue with</span>
          </p>
          <div class="flex mt-3" style="justify-content: space-between;">
            <div>
              <button
                class="flex py-2 px-4 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Facebook
              </button>
            </div>
            <div>
              <button
                class="flex py-2 px-4 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Twitter
              </button>
            </div>
            <div>
              <button
                class="flex py-2 px-4 border border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Google
              </button>
            </div>
          </div>
        </div>

        <div class="text-grey-dark text-sm mt-6">
          Already have an account?
          <nuxt-link class="no-underline border-b border-blue text-blue" to="/">
            Log in </nuxt-link
          >.
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  </div>
</template>

<style scoped>
.or-continue-with {
  border-bottom: 1px solid lightgray;
  line-height: 0.1em;
  margin: 10px 0 20px;
}

.or-continue-with span {
  background: #fff;
  padding: 0 10px;
}
</style>
