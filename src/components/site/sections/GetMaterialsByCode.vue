<template>
  <div class="get-materials-by-code">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p class="my-head-text">
            получение материалов по коду
          </p>
        </div>
        <div class="col-sm-12 col-md-4 co-lg-4 col-xl-4">
          <div class="instruc-by-code">
            <p>Ниже в поле ввода Вы можете ввести полученный код</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae debitis
              deserunt
              eos, error inventore ipsum minima nemo perspiciatis, possimus quam reiciendis suscipit
              tempore,
              voluptate. Accusantium aliquam animi asperiores aspernatur
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda beatae debitis
              deserunt
              eos, error inventore ipsum minima nemo perspiciatis, possimus quam reiciendis suscipit
              tempore,
              voluptate. Accusantium aliquam animi asperiores aspernatur.....</p>
          </div>
          <div class="actions-by-code">
            <p>Введите личный код:</p>
            <div class="row">
              <div class="col-6">
                <input type="password" :maxlength="maxLength" v-model="inputText"
                       placeholder=".. .. ..">
              </div>
            </div>
            <Button value="посмотреть материалы" bgcolor="bg-red"/>
          </div>

        </div>

        <div class="col-sm-12 col-md-6 co-lg-6 col-xl-6">
          <div class="player-container">
            <vue-core-video-player :cover="cover" style="height: auto;width: 100%"
                                   src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></vue-core-video-player>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../button/Button";
import img from '../../../assets/images/img-video.png'

export default {
  name: "GetMaterialsByCode",
  data() {
    return {
      cover: img,
      inputText: '',
      maxLength: 6
    }
  },
  components: {Button},
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'About Us'
  }
}
</script>

<style scoped>

</style>