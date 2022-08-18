<script>
import ButtonComponent from "../components/ButtonComponent.vue";
import { mapState, mapActions } from "pinia";
import { useMain } from "../stores/main";

export default {
  name: "CreateProfilePage",
  components: {
    ButtonComponent,
  },
  methods: {
    registerHandler() {
      // console.log(this.newProfile);
      this.createProfile(this.newProfile);
    },
    editHandler() {
      // console.log(this.newProfile);
      this.editProfile(this.newProfile);
    },
    ...mapActions(useMain, ["createProfile", "findProfile"]),
    dateFormatter(date) {
      console.log(date);
      let dateFix = new Date(date);
      return dateFix.toISOString().slice(0, 10);
    },
  },
  computed: {
    ...mapState(useMain, ["userProfile", "profileFound"]),
  },
  data() {
    return {
      newProfile: {
        firstName: "",
        lastName: "",
        selfDescription: "",
        address: "",
        phoneNumber: "",
        profilePicture: "",
        birthdate: "",
      },
    };
  },
  created() {
    if (this.userProfile !== null) {
      this.newProfile.firstName = this.userProfile.firstName;
      this.newProfile.lastName = this.userProfile.lastName;
      this.newProfile.selfDescription = this.userProfile.selfDescription;
      this.newProfile.address = this.userProfile.address;
      this.newProfile.phoneNumber = this.userProfile.phoneNumber;
      this.newProfile.profilePicture = this.userProfile.profilePicture;
      this.newProfile.birthdate = this.userProfile.birthdate;
    }
  },
};
</script>
<template>
  <section class="vh-200" id="register_page" v-if="!profileFound">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <!-- <div class="card border-0 shadow rounded-3 my-5 login-card"> -->
          <div class="card-body p-4 p-sm-5 shadow login-card rounded-3">
            <form id="registerForm" @submit.prevent="registerHandler">
              <div class="form-outline mb-4">
                <h1 class="text-center">Profile</h1>
              </div>
              <!-- Username input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="registerUsername"
                  >First Name</label
                >
                <input
                  id="registerUsername"
                  type="text"
                  class="form-control"
                  placeholder="Your First Name"
                  v-model="newProfile.firstName"
                />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="registerUsername"
                  >Last Name</label
                >
                <input
                  id="registerUsername"
                  type="text"
                  class="form-control"
                  placeholder="Your Last Name"
                  v-model="newProfile.lastName"
                />
              </div>

              <!-- Description input -->
              <div class="mb-3">
                <label for="selfDescription" class="form-label"
                  >Self Description</label
                >
                <textarea
                  class="form-control"
                  id="selfDescription"
                  rows="3"
                  v-model="newProfile.selfDescription"
                  placeholder="Tell us a little bit about yourself"
                ></textarea>
              </div>

              <!-- phone number input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="registerPhoneNumber"
                  >Phone Number</label
                >
                <input
                  v-model="newProfile.phoneNumber"
                  id="registerPhoneNumber"
                  type="text"
                  class="form-control"
                  placeholder="Please input your Phone Number"
                />
              </div>

              <!-- address input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="registerAddress">Address</label>
                <input
                  v-model="newProfile.address"
                  id="registerAddress"
                  type="text"
                  class="form-control"
                  placeholder="Please input your Address"
                />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="registerUsername"
                  >Profile Picture</label
                >
                <input
                  id="registerUsername"
                  type="text"
                  class="form-control"
                  placeholder="Your Profile Picture URL"
                  v-model="newProfile.profilePicture"
                />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="registerUsername"
                  >Birthdate</label
                >
                <input
                  id="registerUsername"
                  type="date"
                  class="form-control"
                  v-model="newProfile.birthdate"
                />
              </div>
              <ButtonComponent
                buttonType="submit"
                buttonClass="btn btn-primary btn-lg"
                buttonText="Create Profile"
              />
            </form>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </section>
  <section class="vh-200" id="register_page" v-else>
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <!-- <div class="card border-0 shadow rounded-3 my-5 login-card"> -->
          <div class="card-body p-4 p-sm-5 shadow login-card rounded-3">
            <form id="registerForm" @submit.prevent="editHandler">
              <div class="form-outline mb-4">
                <h1 class="text-center">Edit Profile</h1>
              </div>

              <div class="text-center">
                <img
                  :src="newProfile.profilePicture"
                  class="text-center"
                  style="max-width: 300px"
                />
              </div>
              <!-- Username input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="registerUsername"
                  >First Name</label
                >
                <input
                  id="registerUsername"
                  type="text"
                  class="form-control"
                  placeholder="Your First Name"
                  v-model="newProfile.firstName"
                />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="registerUsername"
                  >Last Name</label
                >
                <input
                  id="registerUsername"
                  type="text"
                  class="form-control"
                  placeholder="Your Last Name"
                  v-model="newProfile.lastName"
                />
              </div>

              <!-- Description input -->
              <div class="mb-3">
                <label for="selfDescription" class="form-label"
                  >Self Description</label
                >
                <textarea
                  class="form-control"
                  id="selfDescription"
                  rows="3"
                  v-model="newProfile.selfDescription"
                  placeholder="Tell us a little bit about yourself"
                ></textarea>
              </div>

              <!-- phone number input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="registerPhoneNumber"
                  >Phone Number</label
                >
                <input
                  v-model="newProfile.phoneNumber"
                  id="registerPhoneNumber"
                  type="text"
                  class="form-control"
                  placeholder="Please input your Phone Number"
                />
              </div>

              <!-- address input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="registerAddress">Address</label>
                <input
                  v-model="newProfile.address"
                  id="registerAddress"
                  type="text"
                  class="form-control"
                  placeholder="Please input your Address"
                />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="registerUsername"
                  >Profile Picture</label
                >
                <input
                  id="registerUsername"
                  type="text"
                  class="form-control"
                  placeholder="Your Profile Picture URL"
                  v-model="newProfile.profilePicture"
                />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="registerUsername"
                  >Birthdate</label
                >
                <input
                  id="registerUsername"
                  type="date"
                  class="form-control"
                  v-model="newProfile.birthdate"
                />
              </div>
              <ButtonComponent
                buttonType="submit"
                buttonClass="btn btn-primary btn-lg"
                buttonText="Edit Profile"
              />
            </form>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </section>
  <RouterView />
</template>
