<template>
  <div class="container">
    <v-container class="myGrid">
      <v-card
        v-for="song in songs"
        :key="song.id"
        :class="song.color"
        color="orange lighten-2"
        tile
        flat
        style="object-fit:contain;"
        @click="!isPlaying ? playSong(song.url,song.id) : pause(song.url,song.id)"
      >
        <v-img class="card-img" :src="song.cover_art_url">
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
          url: 'https://drive.google.com/uc?export=download&id=1Rvybbfj5KDks15M_NYyx_qpXLlJhmThM',
          cover_art_url: 'https://images.genius.com/b203a0946857ff6a3c6d218ee3f12c61.1000x1000x1.png'
        },
        {
          color: 'yellow',
          title: 'Love Me More',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1PpzXwxf4ibqC-glQovXsP7qI7z5woQiC',
          cover_art_url: 'https://images.wave.fr/images//trippie-redd-album.jpg'
        },
        {
          color: 'cyan',
          id: 3,
          title: 'Wet Dreamz',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=19v1iWSOud5tt16muoKG3fc55X8gTt_-4',
          cover_art_url: 'https://images-na.ssl-images-amazon.com/images/I/71iQcMbTpWL._SL1500_.jpg'
        },
        {
          color: 'indigo2',
          id: 4,
          title: 'Love',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1gRvnYa-O8gPwcq58nceBwIwDJv2Rb_uF',
          cover_art_url: 'https://cdn.vox-cdn.com/thumbor/I_i_aUlZifyeltciYsSnmmkP5Ng=/0x0:1200x1200/920x613/filters:focal(541x443:733x635):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65062783/wsxazn6kvk3r0zs7sstv.8.jpg'
        },
        {
          color: 'red1',
          id: 5,
          title: 'Pop It',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1HOS3PMzC1UF19DxF-NQFWgbtB4bwC-BQ',
          cover_art_url: 'http://hw-img.datpiff.com/m76c3a0d/_-_Big_Bank_Big_Bank-front-large.jpg'
        },
        {
          color: 'red2',
          id: 6,
          title: 'Rich Forever',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1fQ-_5vto1bZPCXBN41tNFyJ2FgemHCRu',
          cover_art_url: 'https://images.genius.com/9f70cdee6da653ffa1e55948e673ea43.1000x1000x1.jpg'
        },
        {
          color: 'red3',
          id: 7,
          title: 'Dance All Night',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1fZsCp6F4ToSn8l4lH13kaDWWTfGG2Nw8',
          cover_art_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Trippie_Redd_-_%21.png/220px-Trippie_Redd_-_%21.png'
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
.card-img{
    width:inherit;
    object-fit: contain !important;
}
.myGrid {
 width: 250px;
 height: 250px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "orange cyan red1"
    "orange indigo2 red2"
    "yellow indigo2 red3"
    ". . red4"
    "purple green blue"
    ;
    grid-gap: 0.3rem;
}
.orange {
  position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  width: inherit;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all .3s ease-in-out;
  grid-area: orange;
}
.orange:hover{
   box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);
}
.indigo2 {
  position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  width: inherit;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all .3s ease-in-out;
  grid-area: indigo2 }
.indigo2:hover {
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);
}
.red1 {
  position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  width: inherit;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all .3s ease-in-out;
  grid-area: red1 }
.red1:hover{
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);
}
.red2 {
  position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  width: inherit;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all .3s ease-in-out;
  grid-area: red2 }
.red2:hover{
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);
  }
.red3 {position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  width: inherit;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all .3s ease-in-out;
  grid-area: red3}
  .red3:hover{
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);
  }
.red4 { position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  width: inherit;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all .3s ease-in-out;
  grid-area: red4}
  .red4:hover{
    box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);
  }
.green {position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  width: inherit;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all .3s ease-in-out;
  grid-area: green }
  .green:hover {
    box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);
  }
.purple { position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  width: inherit;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all .3s ease-in-out;
  grid-area: purple}
  .purple:hover{
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);
  }
.blue { position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  width: inherit;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all .3s ease-in-out;
  grid-area: blue }
  .blue:hover{
    box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);
  }
.yellow {position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  width: inherit;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all .3s ease-in-out;
  grid-area: yellow
}
.yellow:hover{
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);
}
.cyan{
  position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  width: inherit;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  transition: all .3s ease-in-out;
  grid-area: cyan
}
.cyan:hover {
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -4px, 0px);
}
</style>
