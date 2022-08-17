<script></script>

<template>
  <h1>ini register page</h1>
  <div>
    <div></div>
    <div>
      <div>
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <input type="password" placeholder="Password" />
      </div>
      <div>
        <button>Register</button>
      </div>
      <div>
        already have account?
        <button>
          <router-link class="buttonNav" to="/login">Login</router-link>
        </button>
      </div>
    </div>
  </div>
</template>
