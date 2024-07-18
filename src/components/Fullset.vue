<template>
  <div class="game">
    <div class="game__fullset">
      <div class="playingCards faceImages simpleCards rotateHand">
        <ul class="table">
          <li>
            <div class="card rank-2 diams"><span class="rank">2</span><span class="suit">&diams;</span></div>
          </li>
          <li>
            <div class="card rank-3 diams"><span class="rank">3</span><span class="suit">&diams;</span></div>
          </li>
          <li>
            <div class="card rank-4 diams"><span class="rank">4</span><span class="suit">&diams;</span></div>
          </li>
          <li>
            <div class="card rank-5 diams"><span class="rank">5</span><span class="suit">&diams;</span></div>
          </li>
          <li>
            <div class="card rank-6 diams"><span class="rank">6</span><span class="suit">&diams;</span></div>
          </li>
          <li>
            <div class="card rank-7 diams"><span class="rank">7</span><span class="suit">&diams;</span></div>
          </li>
          <li>
            <div class="card rank-8 diams"><span class="rank">8</span><span class="suit">&diams;</span></div>
          </li>
          <li>
            <div class="card rank-9 diams"><span class="rank">9</span><span class="suit">&diams;</span></div>
          </li>
          <li>
            <div class="card rank-10 diams"><span class="rank">10</span><span class="suit">&diams;</span></div>
          </li>
          <li>
            <div class="card rank-j diams"><span class="rank">J</span><span class="suit">&diams;</span></div>
          </li>
          <li>
            <div class="card rank-q diams"><span class="rank">Q</span><span class="suit">&diams;</span></div>
          </li>
          <li>
            <div class="card rank-k diams"><span class="rank">K</span><span class="suit">&diams;</span></div>
          </li>
          <li>
            <div class="card rank-a diams"><span class="rank">A</span><span class="suit">&diams;</span></div>
          </li>
        </ul>

        <ul class="table">
          <li>
            <div class="card rank-2 hearts"><span class="rank">2</span><span class="suit">&hearts;</span></div>
          </li>
          <li>
            <div class="card rank-3 hearts"><span class="rank">3</span><span class="suit">&hearts;</span></div>
          </li>
          <li>
            <div class="card rank-4 hearts"><span class="rank">4</span><span class="suit">&hearts;</span></div>
          </li>
          <li>
            <div class="card rank-5 hearts"><span class="rank">5</span><span class="suit">&hearts;</span></div>
          </li>
          <li>
            <div class="card rank-6 hearts"><span class="rank">6</span><span class="suit">&hearts;</span></div>
          </li>
          <li>
            <div class="card rank-7 hearts"><span class="rank">7</span><span class="suit">&hearts;</span></div>
          </li>
          <li>
            <div class="card rank-8 hearts"><span class="rank">8</span><span class="suit">&hearts;</span></div>
          </li>
          <li>
            <div class="card rank-9 hearts"><span class="rank">9</span><span class="suit">&hearts;</span></div>
          </li>
          <li>
            <div class="card rank-10 hearts"><span class="rank">10</span><span class="suit">&hearts;</span></div>
          </li>
          <li>
            <div class="card rank-j hearts"><span class="rank">J</span><span class="suit">&hearts;</span></div>
          </li>
          <li>
            <div class="card rank-q hearts"><span class="rank">Q</span><span class="suit">&hearts;</span></div>
          </li>
          <li>
            <div class="card rank-k hearts"><span class="rank">K</span><span class="suit">&hearts;</span></div>
          </li>
          <li>
            <div class="card rank-a hearts"><span class="rank">A</span><span class="suit">&hearts;</span></div>
          </li>
        </ul>

        <ul class="table">
          <li>
            <div class="card rank-2 spades"><span class="rank">2</span><span class="suit">&spades;</span></div>
          </li>
          <li>
            <div class="card rank-3 spades"><span class="rank">3</span><span class="suit">&spades;</span></div>
          </li>
          <li>
            <div class="card rank-4 spades"><span class="rank">4</span><span class="suit">&spades;</span></div>
          </li>
          <li>
            <div class="card rank-5 spades"><span class="rank">5</span><span class="suit">&spades;</span></div>
          </li>
          <li>
            <div class="card rank-6 spades"><span class="rank">6</span><span class="suit">&spades;</span></div>
          </li>
          <li>
            <div class="card rank-7 spades"><span class="rank">7</span><span class="suit">&spades;</span></div>
          </li>
          <li>
            <div class="card rank-8 spades"><span class="rank">8</span><span class="suit">&spades;</span></div>
          </li>
          <li>
            <div class="card rank-9 spades"><span class="rank">9</span><span class="suit">&spades;</span></div>
          </li>
          <li>
            <div class="card rank-10 spades"><span class="rank">10</span><span class="suit">&spades;</span></div>
          </li>
          <li>
            <div class="card rank-j spades"><span class="rank">J</span><span class="suit">&spades;</span></div>
          </li>
          <li>
            <div class="card rank-q spades"><span class="rank">Q</span><span class="suit">&spades;</span></div>
          </li>
          <li>
            <div class="card rank-k spades"><span class="rank">K</span><span class="suit">&spades;</span></div>
          </li>
          <li>
            <div class="card rank-a spades"><span class="rank">A</span><span class="suit">&spades;</span></div>
          </li>
        </ul>

        <ul class="table">
          <li>
            <div class="card rank-2 clubs"><span class="rank">2</span><span class="suit">&clubs;</span></div>
          </li>
          <li>
            <div class="card rank-3 clubs"><span class="rank">3</span><span class="suit">&clubs;</span></div>
          </li>
          <li>
            <div class="card rank-4 clubs"><span class="rank">4</span><span class="suit">&clubs;</span></div>
          </li>
          <li>
            <div class="card rank-5 clubs"><span class="rank">5</span><span class="suit">&clubs;</span></div>
          </li>
          <li>
            <div class="card rank-6 clubs"><span class="rank">6</span><span class="suit">&clubs;</span></div>
          </li>
          <li>
            <div class="card rank-7 clubs"><span class="rank">7</span><span class="suit">&clubs;</span></div>
          </li>
          <li>
            <div class="card rank-8 clubs"><span class="rank">8</span><span class="suit">&clubs;</span></div>
          </li>
          <li>
            <div class="card rank-9 clubs"><span class="rank">9</span><span class="suit">&clubs;</span></div>
          </li>
          <li>
            <div class="card rank-10 clubs"><span class="rank">10</span><span class="suit">&clubs;</span></div>
          </li>
          <li>
            <div class="card rank-j clubs"><span class="rank">J</span><span class="suit">&clubs;</span></div>
          </li>
          <li>
            <div class="card rank-q clubs"><span class="rank">Q</span><span class="suit">&clubs;</span></div>
          </li>
          <li>
            <div class="card rank-k clubs"><span class="rank">K</span><span class="suit">&clubs;</span></div>
          </li>
          <li>
            <div class="card rank-a clubs"><span class="rank">A</span><span class="suit">&clubs;</span></div>
          </li>
        </ul>

        <ul class="table">
          <li>
            <div class="card back">*</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.game {
  display: flex;
  max-width: 1000px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  &game__fullset{
    display:flex;
    width:80%;
    background-color: rgba(34, 47, 66, 0.54);
    margin-bottom: 40px;
    border-radius: 10px;
    border: 1px solid #2f4566;
    justify-content: center;
    padding: 20px 50px;
  }
}
</style>
