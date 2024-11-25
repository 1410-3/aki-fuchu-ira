<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <div class="text-center">
        <h1 class="text-h2">
          Welcome To Fuchu <br>
          International Relations Association!!
        </h1>
      </div>

      <div class="py-4" />

      <v-row>
        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-text-box-outline"
            rounded="lg"
            title="交流協会について / About the relations association"
            variant="text"
            to="/overview" 
            tag="router-link"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-text-box-outline"
            rounded="lg"
            title="イベント / event"
            variant="text"
            to="/events" 
            tag="router-link"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://www.instagram.com/international.fuchu/"
            prepend-icon="mdi-star-circle-outline"
            rel="noopener noreferrer"
            rounded="lg"
            target="_blank"
            title="インスタグラム / Instagram"
            variant="text"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-widgets-outline"
            rounded="lg"
            title="会員募集 / Recruitment of members"
            variant="text"
            to="/membership" 
            tag="router-link"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-account-group-outline"
            rounded="lg"
            title="語学教室 / language class"
            variant="text"
            to="/class" 
            tag="router-link"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            prepend-icon="mdi-account-group-outline"
            rounded="lg"
            title="アーカイブ / archive"
            variant="text"
            to="/archive" 
            tag="router-link"
          >
            <v-overlay
              opacity=".06"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  //
</script>
