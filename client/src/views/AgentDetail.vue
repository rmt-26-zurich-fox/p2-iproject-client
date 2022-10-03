<script>
import { mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  data() {
    return { abilityName: "", abilityDescription: "" };
  },
  computed: {
    ...mapState(useCounterStore, ["agent"]),
  },
  methods: {
    abilityData(name, description) {
      console.log(name, description);
      this.abilityName = name;
      this.abilityDescription = description;
    },
  },
  created() {
    (this.abilityName = "Q - " + this.agent.abilities.ability1.name),
      (this.abilityDescription = this.agent.abilities.ability1.description);
  },
};
</script>
<template>
  <div class="" style="color: white">
    <div class="landing">
      <div class="container">
        <div class="d-flex align-items-center">
          <img :src="agent.img" alt="" class="agent-img" />
          <div class="agent-data">
            <div class="row">
              <div class="col-6">
                <h1 class="agent-name">{{ agent.name }}</h1>
                <h3>{{ agent.role.name }}</h3>
              </div>
              <div class="col-6">
                <img :src="agent.role.image" alt="" class="role-img" />
              </div>
              <div class="col-12 mt-3">
                <p>{{ agent.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="abilities container">
      <h1 class="agent-name">Kemampuan khusus</h1>
      <div>
        <button
          class="abilities-btn"
          @click.prevent="
            abilityData(
              'Q - ' + agent.abilities.ability1.name,
              agent.abilities.ability1.description
            )
          "
        >
          <img
            :src="agent.abilities.ability1.imgAbility"
            alt=""
            class="abilities-icon"
          />
        </button>
        <button
          class="abilities-btn"
          @click.prevent="
            abilityData(
              'E - ' + agent.abilities.ability2.name,
              agent.abilities.ability2.description
            )
          "
        >
          <img
            :src="agent.abilities.ability2.imgAbility"
            alt=""
            class="abilities-icon"
          />
        </button>
        <button
          class="abilities-btn"
          @click.prevent="
            abilityData(
              'C - ' + agent.abilities.ability3.name,
              agent.abilities.ability3.description
            )
          "
        >
          <img
            :src="agent.abilities.ability3.imgAbility"
            alt=""
            class="abilities-icon"
          />
        </button>
        <button
          class="abilities-btn"
          @click.prevent="
            abilityData(
              'X - ' + agent.abilities.ultimate.name,
              agent.abilities.ultimate.description
            )
          "
        >
          <img
            :src="agent.abilities.ultimate.imgAbility"
            alt=""
            class="abilities-icon"
          />
        </button>
      </div>
      <h2>{{ abilityName }}</h2>
      <p class="abilities-desc">{{ abilityDescription }}</p>
    </div>
  </div>
</template>
<style>
.landing {
  width: 100%;
  height: 500px;
  background-color: #dc3545;
}
.agent-data {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
}
.agent-name {
  font-size: 60px;
}
.agent-img {
  height: 600px;
}
.role-img {
  margin-top: 25px;
  width: 75px;
  height: 75px;
  display: inline;
}
.abilities {
  margin-top: 100px;
  padding-bottom: 150px;
  text-align: center;
}
.abilities-btn {
  background-color: #1b2430;
  border: none;
  padding: 20px;
  margin: 20px;
}
.abilities-btn:hover {
  background-color: #dc3545;
}

.abilities-icon {
  width: 50px;
  height: 50px;
}
.abilities-desc {
  max-width: 700px;
  text-align: center;
  margin: auto;
}
</style>
