<template>
  <div>
    <v-conteiner maxWidth="md">
      <v-card>
        <v-typography>Team Sing up</v-typography>
        <h3 class="title-profile mt-5">Personal</h3>
        <hr class="divider" />
        <ul class="list-item ml-20 mt-5">
          <div class="row">
            <div class="col">
              <li>{{ name }}</li>
              <li>{{ nickName }}</li>
              <li>{{ email }}</li>
            </div>
            <div class="col">
              <li>{{ phone }}</li>
              <li>{{ age }}</li>
            </div>
          </div>
        </ul>

        <h3 class="title-profile mt-5">Social</h3>
        <hr class="divider" />
        <ul class="list-item ml-20 mt-5">
          <li>{{ github }}</li>
          <li>{{ linkedin }}</li>
        </ul>

        <h3 class="title-profile mt-5">Certificates</h3>
        <hr class="divider" />
        <ul class="list-item ml-20 mt-5 timeline" v-if="showCertificate">   
          <li v-for="item in certificate" class="bullet" :key="item">
 
              <p>{{ item.graduation }}</p>
              <p>{{ item.instituicion }}</p>
            
          </li>
        </ul>
        <p v-else> Sem dados de certificado!</p>
      </v-card>
    </v-conteiner>
  </div>
</template>

<script>
import Conteiner from "@/components/atoms/Conteiner.vue";
import Card from "@/components/atoms/Card.vue";
import Typography from "@/components/atoms/Typography.vue";
export default {
  name: "ContentProfile",
  components: {
    "v-conteiner": Conteiner,
    "v-card": Card,
    "v-typography": Typography,
  },
  computed: {
    showCertificate(){
      const show = this.certificate[0].instituicion;
      return show ? true : false;
    },
    name() {
      return this.$store.state.singUp.name;
    },
    nickName() {
      return this.$store.state.singUp.nickName;
    },
    email() {
      return this.$store.state.singUp.email;
    },
    age() {
      return this.$store.state.singUp.age;
    },
    phone() {
      return this.$store.state.singUp.phone;
    },
    github() {
      return this.$store.state.singUp.github;
    },
    linkedin() {
      return this.$store.state.singUp.linkedin;
    },
    certificate() {
      return this.$store.state.singUp.certificate;
    },
  },
};
</script>

<style lang="scss" scoped>
.title-profile {
  font-weight: 300;
  font-size: 28px;
  line-height: 52px;
  letter-spacing: -1.5px;
}
li {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
}
.divider {
  border: 2px solid #dddddd;
}

ul.timeline .bullet::before {
  content: "\f111";
  color: #d4d9df;
  font-family: "Font Awesome 5 Free";
  color: #660099;
  margin-right: 10px;
  font-size: 16px;

  z-index: 999;
}
ul.timeline {
  display: flex;
  align-items: baseline;
  align-content: center;
  flex-direction: column;
  margin-left: 0;
      margin-left: -19px;
}
ul.timeline > li {
  display: flex;
  align-items: baseline;
  align-content: center;
  flex-direction: column;
  padding-left: 20px;
  position: relative;
  margin-bottom: 0;
}

ul.timeline > li::after {
  content: " ";
  background: #660099;
  display: inline-block;
  position: absolute;
  left: 27px;
  width: 2px;
  height: 78px;
  top: 17px;
}

ul.timeline li > p {
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 20px;
  z-index: 1;
  right: 10px;
}

ul.timeline > li:last-child::after {
  height: 82px;
  top: 17px;
}
</style>