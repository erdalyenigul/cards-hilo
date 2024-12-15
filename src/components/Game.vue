<template>
  <div class="game">
    <History />
    <Action />
  </div>
</template>

<script setup lang="ts">
import History from '../components/GameHistory.vue';
import Action from '../components/GameAction.vue';
</script>

<style lang="scss">
.game {
  display: flex;
  max-width: 1000px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;

  .history{
    display:flex;
    width:80%;
    min-height:110px;
    background-color: rgba(34, 47, 66, 0.54);
    margin-bottom: 40px;
    border-radius: 10px;
    border: 1px solid #2f4566;
    padding:10px;
    #autoScroll{
      scroll-behavior: smooth;
    }
    .playingCards{
      position:relative;
      width: 100%;
      overflow-y: auto;
      .card{
        box-shadow: 0px 1px 4px #292929;
        .rank{
          font-size: 20px;
          &.diams, &.hearts{
            color:#d00226;
          } 
          &.spades, &.clubs{
            color:#000;
          } 
        }
        .suit{
          font-size: 20px;
          width: 100%;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          .smybol-1{
            position: absolute;
            width:25px;
            height:25px;
            top: 50%;
            transform: translateY(-50%);
          }
          .smybol-2{
            position: absolute;
            width:12px;
            height:12px;
            bottom:10px;
            right:10px;
          }
        }
      }
    }
    &__element{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1px 2px;
      margin-top: 2px;
      background-color: #1aa529;
      border-radius: 4px;
      font-size:12px;
      width:100%;
      color:#fff;
      &-over{
        background-color:#d00226;
      }
    }
  }
  
  .action{
    display:flex;
    width:100%;
    height:300px;
    margin-bottom: 40px;
    align-items: center;
    &__shortcut{
      display: flex;
      align-items: center;
      width: calc(50% - 111px);
      padding:20px 40px;
      opacity:1;
      transition: all 0.1s ease;
      &-content{
        position: relative;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap:10px;
        width:100%;
        border: 1px solid #2f4566;
        border-radius: 10px;
        padding:5px;
        &-tooltip{
          position:absolute;
          left:50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          background-color: #1c2533;
          color:#fff;
          padding:5px 10px;
          z-index: 2;
          font-size: 14px;
          font-weight: 500;
          border-radius: 4px;
          display:none;
          align-items:center;
          justify-content:center;
          width:270px;
        }
        &-button{
          height:52px;
          display: flex;
          width: 100%;
          background:transparent;
          border:0;
          flex-direction: column;
          border-radius:6px;
          padding:8px;
          position: relative;
          cursor:pointer;
          span{
            display: flex;
            width:100%;
            color:#fff;
            font-size:10px;
            &:nth-child(1){
              font-size:16px;
              font-weight: 600;
            }
          }
          &:after {
            content: " ";
            display: block;
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            opacity: 0.6;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
          }
          &--red{
            background-color:#d00226;
            &:after {
              background-image: url(/src/assets/images/hearts-white.svg);
            }
          }
          &--black{
            background-color:#000;
            &:after {
              background-image: url(/src/assets/images/spades-white.svg);
            }
          }
          &--number{
            background:linear-gradient(90deg, #243753 0%, #405780);
            &:after {
              background-image: url(/src/assets/images/dots-3.svg);
            }
          }
          &--letter{
            background:linear-gradient(90deg, #243753 0%, #405780);
            &:after {
              background-image: url(/src/assets/images/crown.svg);
            }
          }
          &-preventClick{
            pointer-events: none;
          }
        }
        &:hover{
          .action__shortcut-content-tooltip{
            display:flex;
          }
        }
      }
      &-hidden{
        height:0;
        overflow: hidden;
        opacity:0;
        pointer-events: none;
        margin: 0 !important;
        padding: 0 !important;
      }
    }
    &__cards{
      display: flex;
      width: 222px;
      height:100%;
      padding:15px;
      &-playingCards{
        position:relative;
        width: 100%;
        &-card{
          width:100%;
          height:106%;
          box-shadow: 0px 1px 4px #292929;
          transition: transform .25s;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          transform: translateX(0) rotateY(0);
          &-slide-up{
            transform: translateY(-2000px)!important;
          }
          &-flip{
            transform: translateX(0) rotateY(180deg);
          }
          .rank{
            font-size: 40px;
            &.diams, &.hearts{
              color:#d00226;
            } 
            &.spades, &.clubs{
              color:#000;
            } 
          }
          .suit{
            font-size: 40px;
            width: 100%;
            height: 170px;
            display: flex;
            align-items: center;
            justify-content: center;
            .smybol-1{
              position: absolute;
              width:75px;
              height:75px;
              top: 50%;
              transform: translateY(-50%);
            }
            .smybol-2{
              position: absolute;
              width:25px;
              height:25px;
              bottom:10px;
              right:10px;
            }
          }
        }
      }
      &-start{
        position: absolute;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 5px;
        border: none;
        font-size: 14px;
        border-radius: 10px;
        line-height: 20px;
        font-weight: 600;
        color: #fff;
        background: rgba(0, 0, 0, 0.8);
        z-index:2;
        text-align: center;
        width: 130px;
        cursor: pointer;
      }
      &-game{
        position: absolute;
        top: -5px;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &__bet{
      display: flex;
      align-items: center;
      width: calc(50% - 111px);
      padding:20px 40px;
      opacity:1;
      transition: all 0.1s ease;
      &-content{
        position: relative;
        display: flex;
        flex-direction: column;
        gap:10px;
        width:100%;
        border-radius: 10px;
        border: 1px solid #2f4566;
        padding:5px;
        &-tooltip{
          position:absolute;
          left:50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          background-color: #1c2533;
          color:#fff;
          padding:5px 10px;
          z-index: 2;
          font-size: 14px;
          font-weight: 500;
          border-radius: 4px;
          display:none;
          align-items:center;
          justify-content:center;
          width:270px;
        }
        &-button{
          height: 54px;
          display: flex;
          width: 100%;
          background:transparent;
          border:0;
          flex-direction: column;
          border-radius:6px;
          padding:8px;
          position: relative;
          background:linear-gradient(90deg, #243753 0%, #405780);
          background-size: cover;
          cursor:pointer;
          span{
            display: flex;
            width:100%;
            color:#fff;
            font-size:10px;
            &:nth-child(1){
              font-size:16px;
              font-weight: 600;
            }
          }
          &:after {
            content: " ";
            display: block;
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
            opacity: 0.6;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
          }
          &--higher{
            &:after {
              background-image: url(../assets/images/arrow-up.png);
            }
          }
          &--lower{
            &:after {
              background-image: url(../assets/images/arrow-down.png);
            }
          }
          &-preventClick{
            pointer-events: none;
          }
        }
        &:hover{
          .action__bet-content-tooltip{
            display:flex;
          }
        }
      }
      &-hidden{
        height:0;
        overflow: hidden;
        opacity:0;
        pointer-events: none;
        margin: 0 !important;
        padding: 0 !important;
      }
    }
    &__switch{
      order:4;
      display:none;
      background-color: #28374d;
      font-size: 13px;
      align-items: center;
      justify-content: center;
      padding: 5px;
      border-radius: 19px;
      padding-right: 10px;
      color: #fff;
      font-weight: 600;
    }
  }

  .playingCards{
    .card{
      position:relative;
      &__decision{
        display:flex;
        align-items: center;
        justify-content: center;
        width:25px;
        height:25px;
        position:absolute;
        left:-14.5px;
        top: 50%;
        transform: translateY(-50%);
        border-radius:4px;
        z-index:1;
        img{
          width:25px;
        }
        &-correct{
          background-color:#1aa529;
          &--up{
            background-image: url(../assets/images/arrow-up.svg);
            background-size: cover;
          }
          &--down{
            background-image: url(../assets/images/arrow-down.svg);
            background-size: cover;
          }
          &--other{
            background-image: url(../assets/images/hyphen.png);
            background-size: cover;
          }
        }
        &-wrong{
          background-color:#d00226;
          &--up{
            background-image: url(../assets/images/arrow-up.svg);
            background-size: cover;
          }
          &--down{
            background-image: url(../assets/images/arrow-down.svg);
            background-size: cover;
          }
        }
      }
    }
  }
  
  .panel{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    &__bet {
      width: 100%;
      max-width: 330px;
      padding: 10px;
      border-radius: 6px;
      &-label {
        display: flex;
        width: 100%;
        font-size: 11px;
        color: #a3a9af;
        label{
          margin-bottom:5px;
        }
      }
      input{
        background-color: #28374d;
        border:0;
        outline: none;
        padding: 5px;
        color: #fff;
        font-size:14px;
        width:calc(100% - 68px);
      }
      &-shortcut {
        display: flex;
        width: 100%;
        height:44px;
        background-color: #28374d;
        padding:5px;
        justify-content: space-between;
        align-items: center;
        border:1px solid #28374d;
        &-button {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          font-size:13px;
          color: #ffffff80;
          background-color: #222f42;
          border: none;
          font-weight: 600;
          margin-right:5px;
          &:nth-last-child(1){
            margin-right: 0;
            background:linear-gradient(90deg,#3d87f9 0%,#1566df);
            color: #ffffff;
          }
        }
        &:hover{
          border:1px solid #0d6eff;
        }
      }
      &-profit{
        &-number{
          color:#fff;
        }
        &:hover{
          border:none;
        }
      }
      &-button{
        display: flex;
        justify-content: center;
        width: 205px;
        padding: 10px;
        button{
          align-items: center;
          display: flex;
          justify-content: center;
          cursor: pointer;
          background: linear-gradient(55deg, rgb(77, 202, 119) 6.79%, rgb(24, 212, 88) 94.06%);
          border: none;
          border-radius: 64px;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.3px;
          line-height: 30px;
          width: 200px;
          height: 50px;
          max-width: 175px;
          max-height: 64px;
          text-align: center;
        }
        &-icon{
          width:44px;
        }
      }
    }
  }
}

@media (max-width:1050px) {
  .game .action__shortcut, .game .action__bet{padding: 10px;}
  .game .action__bet-content{border:none; padding:0;}
  .game .action__shortcut-content{border:none; padding:0;}
}
@media (max-width:767px) {
  .game .action__bet-content-button:after{width:40px; height:40px; right:10px;}
  .game .action__bet-content-button span:nth-child(1){font-size:14px;}
  .game .action__bet-content{flex-direction: row;}
  .game .action{height:100%; flex-direction: column; margin-bottom:10px;}
  .game .action__cards{width:170px; height:220px; margin-bottom: 10px;}
  .game .action__bet{width: calc(100% - 120px); width: 100%; order: 2; margin-bottom:10px;}
  .game .action__shortcut{width: 100%; order: 3; margin-bottom:10px;}
  .game .panel{flex-direction: column;}
  .game .panel__bet-button{order:1};
  .game .panel__bet{order:2; padding:5px 10px;}
  .game .history{width:100%; margin-bottom:10px;}
  .game .action__cards{order:1;}
  .game .action__cards .playingCards .card .suit{height:80px;}
  .game .action__cards .playingCards .card .suit .smybol-1{width:50px; height:50px;}
  .game .action__cards .playingCards .card .suit .smybol-2{width:30px; height:30px;}
  .game .action__switch{display:flex;}
  .game .panel__bet-shortcut{height:38px; padding-right:2px;}
  .game .action__shortcut{border: none;}
  .game .action__shortcut, .game .action__bet{padding:0;}
}
</style>
