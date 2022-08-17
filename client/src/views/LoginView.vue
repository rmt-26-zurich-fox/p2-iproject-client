<script></script>

<template>
  <div>
    <div class="container mt-3" style="height: 100vh">
      <div class="row">
        <div class="col-12 col-md-6 offset-md-3">
          <form >
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body">
                <h3 class="card-title text-gray-900 mb-4 text-center">
                  Welcome back
                </h3>
                <div class="mb-3">
                  <input
          
                    type="email"
                    class="form-control"
                    placeholder="Enter Email Address..."
                  />
                </div>
                <div class="mb-3">
                  <input
         
                    type="password"
                    class="form-control"
                    placeholder="Enter Password..."
                  />
                </div>

                <div class="d-grid gap-2 col-6 mx-auto">
                  <button type="submit">Login</button>
                </div>

                <div id="buttonDiv"></div>
                <p class="text-center" color="black">
                  don't have an account?<br />
                  <router-link class="nav-link" to="/register">
                    Register here</router-link
                  >
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
