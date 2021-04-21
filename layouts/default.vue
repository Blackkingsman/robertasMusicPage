<template>
  <!-- App.vue -->

  <v-app>
    <div>
      <v-toolbar>
        <v-toolbar-title class="myFont">
          Roberta Reed
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="d-none d-md-block" style="height:100%;">
          <v-toolbar-items>
            <v-tab>
              <span>
                About
              </span>
            </v-tab>
            <v-tab>
              <span>
                My Music
              </span>
            </v-tab>
            <v-tab>
              <span>
                Unreleased Vault
              </span>
            </v-tab>
            <v-tab>
              <span>
                Blog
              </span>
            </v-tab>
            <v-tab>
              <span>
                Contact
              </span>
            </v-tab>
          </v-toolbar-items>
        </div>
        <div class="d-md-none">
          <v-btn icon @click.stop="drawer = !drawer">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </div>
      </v-toolbar>
    </div>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container>
        <h1 class="entry-title single-title" itemprop="headline">
          The 19 Most Influential R&amp;B Albums of ’90s &amp; the Waves it Left
        </h1>
      </v-container>
      <Hero />
      <!-- <center>
        <font-awesome-icon :icon="['fab', 'spotify']" />
        <font-awesome-icon :icon="['fab', 'instagram']" />
        <font-awesome-icon :icon="['fab', 'youtube']" />
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </center> -->
    </v-main>
  </v-app>
</template>

<script>
import 'nuxt-fontawesome'
import hero from '../components/Hero';
export default {
  components: { hero },

  data () {
    return {
      songs: [
        {
          id: 1,
          title: 'Dance All Night',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1fZsCp6F4ToSn8l4lH13kaDWWTfGG2Nw8',
          cover_art_url: 'https://cdn.vox-cdn.com/thumbor/I_i_aUlZifyeltciYsSnmmkP5Ng=/0x0:1200x1200/920x613/filters:focal(541x443:733x635):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65062783/wsxazn6kvk3r0zs7sstv.8.jpg'
        },
        {
          id: 2,
          title: 'Dance All Night',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1PpzXwxf4ibqC-glQovXsP7qI7z5woQiC',
          cover_art_url: 'https://cdn.vox-cdn.com/thumbor/I_i_aUlZifyeltciYsSnmmkP5Ng=/0x0:1200x1200/920x613/filters:focal(541x443:733x635):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65062783/wsxazn6kvk3r0zs7sstv.8.jpg'
        },
        {
          id: 3,
          title: 'Dance All Night',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1fZsCp6F4ToSn8l4lH13kaDWWTfGG2Nw8',
          cover_art_url: 'https://cdn.vox-cdn.com/thumbor/I_i_aUlZifyeltciYsSnmmkP5Ng=/0x0:1200x1200/920x613/filters:focal(541x443:733x635):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65062783/wsxazn6kvk3r0zs7sstv.8.jpg'
        },
        {
          id: 4,
          title: 'Dance All Night',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1fZsCp6F4ToSn8l4lH13kaDWWTfGG2Nw8',
          cover_art_url: 'https://cdn.vox-cdn.com/thumbor/I_i_aUlZifyeltciYsSnmmkP5Ng=/0x0:1200x1200/920x613/filters:focal(541x443:733x635):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65062783/wsxazn6kvk3r0zs7sstv.8.jpg'
        }
      ]
    };
  }
}

</script>
<style>
.myFont {
  font-family: "Winter";
}
</style>
