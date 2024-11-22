<template>
  <v-app-bar>
    <v-app-bar-title>
      <v-btn 
        text 
        class="menu-btn"
        to="/" 
        tag="router-link">
        {{ isEnglish ? "Fuchu IRA" : "府中町国際交流協会" }}
      </v-btn>
    </v-app-bar-title>
    <v-spacer />
    <v-row
      align-content="center"
      justify="space-evenly"
      style="flex-grow: 1; max-width: 60%;"
    >
      <v-btn 
        icon 
        class="menu-btn"
        to="/overview" 
        tag="router-link">
        <v-icon>mdi-home</v-icon>
        <span class="button-text">{{ menuLabels.overview }}</span>
      </v-btn>
      <v-btn 
        icon 
        class="menu-btn"
        to="/events" 
        tag="router-link">
        <v-icon>mdi-account</v-icon>
        <span class="button-text">{{ menuLabels.events }}</span>
      </v-btn>
      <v-btn 
        icon 
        class="menu-btn"
        to="/photos" 
        tag="router-link">
        <v-icon>mdi-image</v-icon>
        <span class="button-text">{{ menuLabels.photos }}</span>
      </v-btn>
      <v-btn 
        icon 
        class="menu-btn"
        to="/access" 
        tag="router-link">
        <v-icon>mdi-map-marker</v-icon>
        <span class="button-text">{{ menuLabels.access }}</span>
      </v-btn>
      <v-btn 
        icon 
        class="menu-btn"
        to="/membership" 
        tag="router-link">
        <v-icon>mdi-account-plus</v-icon>
        <span class="button-text">{{ menuLabels.membership }}</span>
      </v-btn>
      <v-btn 
        icon 
        class="menu-btn"
        to="/class" 
        tag="router-link">
        <v-icon>mdi-school</v-icon>
        <span class="button-text">{{ menuLabels.class }}</span>
      </v-btn>
      <v-btn 
        icon 
        class="menu-btn">
        <v-icon>mdi-archive</v-icon>
        <span class="button-text">{{ menuLabels.archive }}</span>
      </v-btn>
      <v-btn 
        icon 
        class="menu-btn"
        to="/contact" 
        tag="router-link">
        <v-icon>mdi-email</v-icon>
        <span class="button-text">{{ menuLabels.contact }}</span>
      </v-btn>
    </v-row>
    <v-btn @click="toggleLanguage">
      {{ isEnglish ? "日本語" : "English" }}
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      isEnglish: false,
      menuLabels: {
        overview: "概要",
        events: "イベント",
        photos: "お写真",
        access: "アクセス",
        membership: "会員募集",
        class: "語学教室",
        archive: "アーカイブ",
        contact: "お問い合わせ",
      },
    };
  },
  methods: {
    toggleLanguage() {
      this.isEnglish = !this.isEnglish;
      this.menuLabels = this.isEnglish
        ? {
            overview: "Overview",
            events: "Events",
            photos: "Photos",
            access: "Access",
            membership: "Membership",
            class: "Class",
            archive: "Archive",
            contact: "Contact",
          }
        : {
            overview: "概要",
            events: "イベント",
            photos: "お写真",
            access: "アクセス",
            membership: "会員募集",
            class: "語学教室",
            archive: "アーカイブ",
            contact: "お問い合わせ",
          };
    },
  },
};
</script>

<style scoped>
.transparent-btn {
  padding: 0;
  min-width: auto;
}
.menu-btn {
  min-width: 140px;
  display: flex;
  align-items: center;
  justify-content: start;
}

.button-text {
  margin-left: 8px; 
  font-size: 14px;
}

@media (max-width: 600px) {
  .menu-btn {
    min-width: 100px;
  }
}
</style>

