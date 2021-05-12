<template>
  <div class="container">
    <v-container class="myGrid">
      <v-card
        v-for="song in songs"
        :key="song.id"
        :class="song.color"
        :color="song.color.includes('red')? 'red' : song.color + ' ' + 'lighten-2'"
        tile
        flat
        width="100%"
        height="100%"
        @click="!isPlaying ? playSong(song.url,song.id) : pause(song.url,song.id)"
      >
        <v-img class="card-img" :src="song.cover_art_url" width="inherit" height="inherit">
          <div v-if="song.id === setSong" :class="song.id">
            <v-progress-circular
              v-if="isPlaying"
              :class="song.id"
              :rotate="360"
              :size="200"
              :width="15"
              :value="value"
              color="red accent-3"
              style="margin: 0;
                   position: absolute;
                   progress-circular-rotate-animation: progress-circular-rotate 0.5 linear infinite !default;
                   top: 50%;
                   left: 50%;
                   -ms-transform: translate(-50%, -50%);
                   transform: translate(-50%, -50%);"
            >
              <font-awesome-icon :icon="['fas', 'stop']" class=" fa-4x " />
            </v-progress-circular>
          </div>
        </v-img>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      interval: {},
      audio: undefined,
      isPlaying: false,
      value: 0,
      setSong: undefined,
      lorem: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
      songs: [
        {
          color: 'orange',
          id: 1,
          title: 'Tomb Stone',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1Rvybbfj5KDks15M_NYyx_qpXLlJhmThM'
          // cover_art_url: 'https://i.pinimg.com/originals/d3/b8/6c/d3b86cac17b13f95a31cf2c23de4ed38.jpg'
        },
        {
          color: 'yellow',
          title: 'Love Me More',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1PpzXwxf4ibqC-glQovXsP7qI7z5woQiC'
          // cover_art_url: 'https://i.scdn.co/image/523aeca7d02ba33ec03dd8837130b83e9c51a130'
        },
        {
          color: 'cyan',
          id: 3,
          title: 'Wet Dreamz',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=19v1iWSOud5tt16muoKG3fc55X8gTt_-4'
          // cover_art_url: 'https://i.pinimg.com/originals/d3/b8/6c/d3b86cac17b13f95a31cf2c23de4ed38.jpg'
        },
        {
          color: 'indigo',
          id: 4,
          title: 'Love',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1gRvnYa-O8gPwcq58nceBwIwDJv2Rb_uF'
          // cover_art_url: 'https://i.pinimg.com/originals/d3/b8/6c/d3b86cac17b13f95a31cf2c23de4ed38.jpg'
        },
        {
          color: 'red',
          id: 5,
          title: 'Pop It',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1HOS3PMzC1UF19DxF-NQFWgbtB4bwC-BQ'
          // cover_art_url: 'https://i.pinimg.com/originals/d3/b8/6c/d3b86cac17b13f95a31cf2c23de4ed38.jpg'
        },
        {
          color: 'blue',
          id: 6,
          title: 'Rich Forever',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1fQ-_5vto1bZPCXBN41tNFyJ2FgemHCRu'
          // cover_art_url: 'https://i.scdn.co/image/523aeca7d02ba33ec03dd8837130b83e9c51a130'
        },
        {
          color: 'green',
          id: 7,
          title: 'Dance All Night',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1fZsCp6F4ToSn8l4lH13kaDWWTfGG2Nw8'
          // cover_art_url: 'https://i.scdn.co/image/523aeca7d02ba33ec03dd8837130b83e9c51a130'
        }
      ]
    };
  },
  methods: {
    playSong (songurl, songid) {
      // if nothing is playing at all
      if (this.isPlaying === false) {
        this.audio = new Audio(songurl)
        this.audio.play();
        this.interval = setInterval(() => {
          if (Math.ceil(this.value) === 100) {
            this.pause(songurl, songid);
            return (this.value = 0)
          }
          this.value += 3.33;
          console.log(Math.ceil(this.value));
        }, 1000)
      }
      this.isPlaying = true;
      this.setSong = songid
      console.log(this.isPlaying, songurl);
    },
    pause (songurl, songid) {
      if (this.setSong === songid) {
        this.audio.pause();
        this.isPlaying = false;
        clearInterval(this.interval);
        this.value = 0;
      } else {
        console.log('play the new song and send the id');
        this.audio.pause();
        this.isPlaying = false;
        clearInterval(this.interval);
        this.value = 0;
        this.playSong(songurl, songid);
      }
    }
  }
}
</script>

<style>
:root{
  --main-radius:5px;
  --main-padding:5;
}
.myGrid {
  display: grid;
  height: 100vh;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: repeat(3, 33%);
  grid-template-areas:
    "orange red green"
    ;
    grid-gap: 0.3rem;
}
.orange {
  grid-area: orange;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}
/* .orange:hover{
   box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);
} */
.indigo {
  grid-area: indigo2;
   border-radius: var(--main-radius);
  padding-top: var(--main-padding); }
/* .indigo2:hover {
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);
} */
.red{
  grid-area: red;
   border-radius: var(--main-radius);
  padding-top: var(--main-padding);}
/* .red1:hover{
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);
} */
.green {
  grid-area: green;
   border-radius: var(--main-radius);
  padding-top: var(--main-padding);}
/* .red2:hover{
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);
  } */
.blue {
  grid-area: blue;
   border-radius: var(--main-radius);
  padding-top: var(--main-padding);}
  /* .red3:hover{
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);*/

.yellow {
  grid-area: yellow;
   border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}
/* .yellow:hover{
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);
} */
.cyan{
  grid-area: cyan;
   border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}
/* .cyan:hover {
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);
} */
@media only screen and (max-width:550px) {
  .myGrid{
  grid-gap: 0.2rem;
   min-width: max-content;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 3fr 3.4fr 4.5fr 2.9fr 1.1fr;
    grid-template-areas:
    "orange"
    "yellow"
    "cyan"
    "indigo2"
    "red1"
    "red2"
    "red3"
  }
}

</style>
