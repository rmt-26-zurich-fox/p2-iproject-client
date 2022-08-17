<script>
import { mapState, mapActions } from "pinia";
import { RouterView } from "vue-router";
import ButtonComponent from "../components/ButtonComponent.vue";
import Swal from "sweetalert2";

import { useMain } from "../stores/main";
</script>

<template>
  <section id="news_table" class="d-flex flex-column">
    <h1>Bookmarked News List</h1>
    <div class="table-container shadow login-card rounded-3 d-flex flex-column">
      <!-- <div class="table-container"> -->
      <!-- <div class="form-check-inline text-center my-2">
          </div> -->
      <div class="big-container">
        <div class="d-flex justify-content-center">
          <div class="content-container">
            <div class="row row-cols-1 row-cols-md-3 g-5">
              <div class="col">
                <div class="card shadow rounded-3">
                  <div class="card-body static-card">
                    <span
                      class="badge bg-danger px-2 py-1 shadow-1-strong mb-3"
                      id="detail-category"
                    ></span>
                    <img src="" class="card-img-top" />
                    <h5 class="card-title"></h5>

                    <p class="card-text"></p>
                  </div>
                  <ButtonComponent
                    buttonType="submit"
                    buttonClass="card-button"
                    buttonText="Team Detail"
                  />
                </div>
              </div>
              <div class="col">
                <div class="card shadow rounded-3">
                  <div class="card-body static-card">
                    <span
                      class="badge bg-danger px-2 py-1 shadow-1-strong mb-3"
                      id="detail-category"
                    ></span>
                    <img src="" class="card-img-top" />
                    <h5 class="card-title"></h5>

                    <p class="card-text"></p>
                  </div>
                  <ButtonComponent
                    buttonType="submit"
                    buttonClass="card-button"
                    buttonText="Team Detail"
                  />
                </div>
              </div>
              <div class="col">
                <div class="card shadow rounded-3">
                  <div class="card-body static-card">
                    <span
                      class="badge bg-danger px-2 py-1 shadow-1-strong mb-3"
                      id="detail-category"
                    ></span>
                    <img src="" class="card-img-top" />
                    <h5 class="card-title"></h5>

                    <p class="card-text"></p>
                  </div>
                  <ButtonComponent
                    buttonType="submit"
                    buttonClass="card-button"
                    buttonText="Team Detail"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
