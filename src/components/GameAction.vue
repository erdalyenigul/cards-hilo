<template>
  <div class="action">
    <div class="action__shortcut">
      <div class="action__shortcut-content">
        <button @click="gameCardChange('red')" class="action__shortcut-content-button action__shortcut-content-button--red"
          :class="{ 'action__shortcut-content-button-preventClick': preventClick || isGameStart || gameover }">
          <span>Kırmızı</span>
        </button>
        <button @click="gameCardChange('black')" class="action__shortcut-content-button action__shortcut-content-button--black"
          :class="{ 'action__shortcut-content-button-preventClick': preventClick || isGameStart || gameover }">
          <span>Siyah</span>
        </button>
        <button @click="gameCardChange('number')" class="action__shortcut-content-button action__shortcut-content-button--number"
          :class="{ 'action__shortcut-content-button-preventClick': preventClick || isGameStart || gameover }">
          <span>2-10</span>
        </button>
        <button @click="gameCardChange('symbol')" class="action__shortcut-content-button action__shortcut-content-button--letter"
          :class="{ 'action__shortcut-content-button-preventClick': preventClick || isGameStart || gameover }">
          <span>JQKA</span>
        </button>
      </div>
    </div>

    <div class="action__cards">
      <div class="action__cards-playingCards playingCards simpleCards">
        <div class="action__cards-game">
          <div v-if="gameover" class="action__cards-start" @click="startGame">
           <span>{{ cardHistory.length - 2 }} Kart Bildin :)</span>
           <span>Tekrar Dene!</span>
          </div>
          <div :class="`card action__cards-playingCards-card ${isSlideActive ? 'action__cards-playingCards-card-slide-up' : ''} ${isFlipActive ? 'action__cards-playingCards-card-flip' : ''}`" v-if="!isGameStart">
            <span :class="`rank ${symbol}`">{{ rank }}</span>
            <span class="suit">
              <img class="smybol-1" :src="gameSymbols(symbol)" :alt="symbol">
              <img class="smybol-2" :src="gameSymbols(symbol)" :alt="symbol">
            </span>
          </div>
        </div>
        <div class="card back action__cards-playingCards-card">*</div>
      </div>
    </div>

    <div class="action__bet">
      <div class="action__bet-content">
        <button @click="gameCardChange('higher')" class="action__bet-content-button action__bet-content-button--higher"
          :class="{ 'action__bet-content-button-preventClick': preventClick || isGameStart || gameover }">
          <span>Yukarı</span>
        </button>
        <button @click="gameCardChange('lower')" class="action__bet-content-button action__bet-content-button--lower"
          :class="{ 'action__bet-content-button-preventClick': preventClick || isGameStart || gameover }">
          <span>Aşağı</span>
        </button>
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="panel__bet-button">
      <button v-if="isGameStart || gameover" @click="startGame()">OYNA</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, onMounted } from 'vue';
import { useMock } from '../stores/mock';

const {
  rank,
  symbol,
  isSlideActive,
  isGameStart,
  preventClick,
  gameover,
  cardHistory,
  isFlipActive,
  outcomes } = toRefs(useMock());
const { gameCardChange } = useMock();

const gameSymbols = (symbol: string) => {
 return new URL(`../assets/images/game-symbols/${symbol}.svg`, import.meta.url).href;
};

const { tryAgain } = useMock();

gameCardChange('start')

function startGame() {
  isGameStart.value = false
  
  if(gameover.value) {
    gameover.value = false
    tryAgain()
  }
}

</script>

<style scoped>

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #31232a;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  border: none;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #141a1f;
}

input:checked + .slider:before {
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
}
</style>