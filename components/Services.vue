<template>
    <section class="section">
        <div class="container">
          <h2>Популярные услуги</h2>
          <div class="tabs">
    <div class="tabs__nav">
      <a class="tabs__link tabs__link_active" href="#content-1">Стрижка и укладка</a>
      <a class="tabs__link" href="#content-2">Косметология</a>
      <a class="tabs__link" href="#content-3">Маникюр и педикюр</a>
      <a class="tabs__link" href="#content-4">Макияж</a>
      <a class="tabs__link" href="#content-5">Брови и ресницы</a>
      <a class="tabs__link" href="#content-6">Массаж</a>
    </div>
    <div class="tabs__content">
      <div class="tabs__pane tabs__pane_show" id="content-1">
        Содержимое 1...
      </div>
      <div class="tabs__pane" id="content-2">
        Содержимое 2...
      </div>
      <div class="tabs__pane" id="content-3">
        Содержимое 3...
      </div>
      <div class="tabs__pane" id="content-4">
        Содержимое 4...
      </div>
      <div class="tabs__pane" id="content-5">
        Содержимое 5...
      </div>
      <div class="tabs__pane" id="content-6">
        Содержимое 6...
      </div>
      </div>
    </div>
  </div>
    </section>
</template>

<script>
</script>

<style>
.tabs {
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
    }

    .tabs {
      border: 1px solid lightgray;
    }

    .tabs__nav {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      background: #f8f8f8;
      margin: 0;
      border-bottom: 1px solid lightgray;
    }

    .tabs__link {
      padding: 0.5rem 0.75rem;
      text-decoration: none;
      color: black;
      text-align: center;
      flex-shrink: 0;
      flex-grow: 1;
    }

    .tabs__link_active {
      background: lightgray;
      cursor: default;
    }

    .tabs__link:not(.tabs__link_active):hover,
    .tabs__link:not(.tabs__link_active):focus {
      background-color: #efefef;
    }

    .tabs__content {
      padding: 1rem;
    }

    .tabs__pane {
      display: none;
    }

    .tabs__pane_show {
      display: block;
    }
</style>