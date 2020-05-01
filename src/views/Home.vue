<template>
  <div id="home">
    <v-container>
      <v-row align="center" justify="center">
        <v-col md="6" sm="6" class="md-6 sm-6">
          <h1 class="big-title">Creating Kick-ass Website for Businesses. One at a Time.</h1>
          <p>Hi, I’m Jahid, a Website designer with  programming expertise. I’ve been designing and programming for the last 4 years and have built various human-centered website and web apps for businesses.
          </p>
          <v-btn color="success">Contact Me</v-btn>
          <v-btn outline class="ml-2">My Works</v-btn>
        </v-col>
        <v-col md="6" sm="6" class="bg-pattern">
          <img src="../assets/jahid-anowar.png" alt="Jahid Anowar Vector Image" width="100%">
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="secondary">
      <v-container class="text-center">
        <h2 class="section-heading">Worked with Businesses Globally</h2>
        <p>Here are some organizations I had a pleasure to work with on their Website, Web Apps.</p>
        <img src="../assets/clientele.png" alt="clientele" class="clientele" width="100%">
      </v-container>
    </v-container>

    <v-container class="text-center service">
      <h2 class="section-heading">Services I can help you with</h2>
      <p>I help businesses connect with audiences, delivering greater brand engagement through designing engaging websites and web Apps.</p>
      <v-row>
        <v-col md="4">
          <v-card flat>
            <v-card-title primary-title>
              <v-icon large left>
                mdi-twitter
              </v-icon>
              Website Design
            </v-card-title>
            <v-card-text class="text-left">
              My first focus is on giving a minimalist edge to the web world and brand exposure using thoughtful & human-centered design on your website. No matter how complex your Idea is I always have a way to work it out.
            </v-card-text>
          </v-card> 
        </v-col>
        <v-col md="4">
          <v-card flat>
            <v-card-title primary-title>
              <v-icon large left>
                mdi-twitter
              </v-icon>
              Website Design
            </v-card-title>
            <v-card-text class="text-left">
              My first focus is on giving a minimalist edge to the web world and brand exposure using thoughtful & human-centered design on your website. No matter how complex your Idea is I always have a way to work it out.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="4">
          <v-card flat>
            <v-card-title primary-title>
              <v-icon large left>
                mdi-twitter
              </v-icon>
              Website Design
            </v-card-title>
            <v-card-text class="text-left">
              My first focus is on giving a minimalist edge to the web world and brand exposure using thoughtful & human-centered design on your website. No matter how complex your Idea is I always have a way to work it out.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
      
    
  </div>
</template>

<style lang="scss">
  .big-title{
    line-height: 3.5rem;
    font-size: 3rem;
    margin-bottom: 15px;
  }
  .bg-pattern{
    background-image: url(https://iamjahid.com/wp-content/uploads/2020/04/pattern-two.svg);
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: auto;
  }
  .clientele{
    opacity: 0.5;
    filter: brightness( 200% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg )
  }
  .service{
    padding: 5% 0!important;
  }
</style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
