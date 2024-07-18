<template>
  <div class="action">
    <div :class="{ 'action__shortcut-hidden': switchShortcutMobile }" class="action__shortcut">
      <div class="action__shortcut-content">
        <div v-if="isGameStart || gameover" class="action__shortcut-content-tooltip">Please bet before choosing an option</div>
        <button @click="gameCardChange('red')" class="action__shortcut-content-button action__shortcut-content-button--red"
          :class="{ 'action__shortcut-content-button-preventClick': preventClick || isGameStart || gameover }">
          <span>Red</span>
          <span>x{{ outcomes.color.black }}</span>
          <span>50%</span>
        </button>
        <button @click="gameCardChange('black')" class="action__shortcut-content-button action__shortcut-content-button--black"
          :class="{ 'action__shortcut-content-button-preventClick': preventClick || isGameStart || gameover }">
          <span>Black</span>
          <span>x{{ outcomes.color.red }}</span>
          <span>50%</span>
        </button>
        <button @click="gameCardChange('number')" class="action__shortcut-content-button action__shortcut-content-button--number"
          :class="{ 'action__shortcut-content-button-preventClick': preventClick || isGameStart || gameover }">
          <span>2-10</span>
          <span>x{{ outcomes.numberOrSymbol.number }}</span>
          <span>69.23%</span>
        </button>
        <button @click="gameCardChange('symbol')" class="action__shortcut-content-button action__shortcut-content-button--letter"
          :class="{ 'action__shortcut-content-button-preventClick': preventClick || isGameStart || gameover }">
          <span>JQKA</span>
          <span>x{{ outcomes.numberOrSymbol.symbol }}</span>
          <span>30.77%</span>
        </button>
      </div>
    </div>

    <div class="action__cards">
      <div class="action__cards-playingCards playingCards simpleCards">
        <div class="action__cards-game">
          <div v-if="isGameStart" class="action__cards-start">
            Press Bet to Start!
          </div>
          <div v-if="gameover" class="action__cards-start">
            Try Again!
          </div>
          <div :class="`card action__cards-playingCards-card ${isSlideActive ? 'action__cards-playingCards-card-slide-up' : ''} ${isFlipActive ? 'action__cards-playingCards-card-flip' : ''}`">
            <span :class="`rank ${symbol}`">{{ rank }}</span>
            <span class="suit">
              <img class="smybol-1" :src="`src/assets/images/game-symbols/${symbol}.svg`" :alt="symbol">
              <img class="smybol-2" :src="`src/assets/images/game-symbols/${symbol}.svg`" :alt="symbol">
            </span>
          </div>
        </div>
        <div class="card back action__cards-playingCards-card">*</div>
      </div>
    </div>

    <div :class="{ 'action__bet-hidden': switchBetMobile }" class="action__bet">
      <div class="action__bet-content">
        <div v-if="isGameStart || gameover" class="action__bet-content-tooltip">Please bet before choosing an option</div>
        <button @click="gameCardChange('higher')" class="action__bet-content-button action__bet-content-button--higher"
          :class="{ 'action__bet-content-button-preventClick': preventClick || isGameStart || gameover }">
          <span>Higher or Same</span>
          <span>x{{ outcomes.higherOrSame.higher.number }}</span>
          <span>{{ outcomes.higherOrSame.higher.percent }}%</span>
        </button>
        <button @click="gameCardChange('lower')" class="action__bet-content-button action__bet-content-button--lower"
          :class="{ 'action__bet-content-button-preventClick': preventClick || isGameStart || gameover }">
          <span>Lower or Same</span>
          <span>x{{ outcomes.higherOrSame.lower.number }}</span>
          <span>{{ outcomes.higherOrSame.lower.percent }}%</span>
        </button>
      </div>
    </div>

    <div class="action__switch">
      <label class="switch">
        <input type="checkbox" @click="switchBetModel()">
        <span class="slider"></span>
      </label>
      Switch Bet Model
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
  isFlipActive,
  switchShortcutMobile,
  switchBetMobile,
  outcomes } = toRefs(useMock());
const { gameCardChange } = useMock();

onMounted(() => {
  window.addEventListener("resize", handleWindowSizeChange);
  handleWindowSizeChange();
});
const handleWindowSizeChange = () => {
if (window.innerWidth < 767) {
  switchShortcutMobile.value = true
  switchBetMobile.value = false
}
if(window.innerWidth > 1023) { 
  switchShortcutMobile.value = false
  switchBetMobile.value = false
}
};

function switchBetModel() {
  switchShortcutMobile.value = !switchShortcutMobile.value
  switchBetMobile.value = !switchBetMobile.value
}

</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  margin: 0;
  margin-right: 5px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

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