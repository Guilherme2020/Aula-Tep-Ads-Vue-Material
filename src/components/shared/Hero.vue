<template lang="html">
  <div id="">
    <h1>Oi Deu certo</h1>


    <div class="card">

      <md-dialog md-open-from="#fab" md-close-to="#fab"
          ref="dialog2">

            <md-dialog-title>  Crie uma nota </md-dialog-title>

            <md-dialog-content>
              <h2>A AULA ACABOU</h2>
               <form>
                 <md-input-container>
                   <label>Note</label>
                   <md-textarea></md-textarea>
                 </md-input-container>
               </form>
             </md-dialog-content>

             <md-dialog-actions>
               <md-button class="md-primary" @click="closeDialog('dialog2')">Cancel</md-button>
               <md-button class="md-primary" @click="closeDialog('dialog2')">Create</md-button>
             </md-dialog-actions>



      </md-dialog>
      <md-button class="md-fab md-fab-bottom-right" id="fab" @click="openDialog('dialog2')">
        <md-icon>add</md-icon>
      </md-button>


      <md-card @click.native="openDialog('dialog2')">
          <md-card-media>
              <img src="./assets/card-image-1.jpg" alt="">
          </md-card-media>
          <md-card-header>
              <div class="md-title">Teste Tep</div>
              <div class="md-subhead">Sobre a aula </div>
          </md-card-header>
          <!-- <md-card-actions>
           <md-rating-bar v-model="rating1" :md-max-rating="5" class="md-primary" md-theme="light-blue"></md-rating-bar>

         </md-card-actions> -->

          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
              laborum.
          </md-card-content>
      </md-card>
      <md-card>
          <md-card-media>
              <img src="./assets/card-image-1.jpg" alt="">
          </md-card-media>
          <md-card-header>
              <div class="md-title">Teste Tep</div>
              <div class="md-subhead">Sobre a aula </div>
          </md-card-header>
          <md-card-actions>
            <!-- <md-rating-bar v-model="rating1" :md-max-rating="5"
            class="md-primary" md-theme="light-blue">
            </md-rating-bar> -->
          </md-card-actions>

          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
              laborum.
          </md-card-content>
      </md-card>
      <md-card>
          <md-card-media>
              <img src="./assets/card-image-1.jpg" alt="">
          </md-card-media>
          <md-card-header>
              <div class="md-title">Teste Tep</div>
              <div class="md-subhead">Sobre a aula </div>
          </md-card-header>
          <md-card-actions>
            <!-- <md-rating-bar v-model="rating1" :md-max-rating="5"
            class="md-primary" md-theme="light-blue">
            </md-rating-bar> -->
          </md-card-actions>

          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
              laborum.
          </md-card-content>
      </md-card>
      <md-card>
          <md-card-media>
              <img src="./assets/card-image-1.jpg" alt="">
          </md-card-media>
          <md-card-header>
              <div class="md-title">Teste Tep</div>
              <div class="md-subhead">Sobre a aula </div>
          </md-card-header>
          <md-card-actions>
            <!-- <md-rating-bar v-model="rating1" :md-max-rating="5"
            class="md-primary" md-theme="light-blue">
            </md-rating-bar> -->
          </md-card-actions>

          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
              laborum.
          </md-card-content>
      </md-card>
      <md-card>
          <md-card-media>
              <img src="./assets/card-image-1.jpg" alt="">
          </md-card-media>
          <md-card-header>
              <div class="md-title">Teste Tep</div>
              <div class="md-subhead">Sobre a aula </div>
          </md-card-header>
          <md-card-actions>
            <!-- <md-rating-bar v-model="rating1" :md-max-rating="5"
            class="md-primary" md-theme="light-blue">
            </md-rating-bar> -->
          </md-card-actions>

          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
              laborum.
          </md-card-content>
      </md-card>
      <md-card>
          <md-card-media>
              <img src="./assets/card-image-1.jpg" alt="">
          </md-card-media>
          <md-card-header>
              <div class="md-title">Teste Tep</div>
              <div class="md-subhead">Sobre a aula </div>
          </md-card-header>
          <md-card-actions>
            <!-- <md-rating-bar v-model="rating1" :md-max-rating="5"
            class="md-primary" md-theme="light-blue">
            </md-rating-bar> -->
          </md-card-actions>

          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
              laborum.
          </md-card-content>
      </md-card>
      <md-card>
          <md-card-media>
              <img src="./assets/card-image-1.jpg" alt="">
          </md-card-media>
          <md-card-header>
              <div class="md-title">Teste Tep</div>
              <div class="md-subhead">Sobre a aula </div>
          </md-card-header>
          <md-card-actions>
            <!-- <md-rating-bar v-model="rating1" :md-max-rating="5"
            class="md-primary" md-theme="light-blue">
            </md-rating-bar> -->
          </md-card-actions>

          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
              laborum.
          </md-card-content>
      </md-card>
      <md-card>
          <md-card-media>
              <img src="./assets/card-image-1.jpg" alt="">
          </md-card-media>
          <md-card-header>
              <div class="md-title">Teste Tep</div>
              <div class="md-subhead">Sobre a aula </div>
          </md-card-header>
          <md-card-actions>
            <!-- <md-rating-bar v-model="rating1" :md-max-rating="5"
            class="md-primary" md-theme="light-blue">
            </md-rating-bar> -->
          </md-card-actions>

          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
              laborum.
          </md-card-content>
      </md-card>

    </div>

  </div>
</template>
<script>

export default {
  name: "",
  data: () => ({

  }),
  methods: {
    openDialog(ref) {
      this.$refs[ref].open()
    },
    closeDialog(ref){
      this.$refs[ref].close()
    },
    onOpen () {
      console.log('Opened')
    },
    onClose (type) {
      console.log('Closed', type)
    }
  }
}
</script>
<style lang="css">

  .card{
    margin-left:7%;
    display: block;
    padding: 4px;
}


  .md-theme-default{
    margin-right: 2%;
  }

  .md-theme-default.md-card{
    width:calc(100%/5);
    float:left;
    margin-top: 2%;
    overflow: hidden;
  }


</style>
