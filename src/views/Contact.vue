<template>
  <v-container>
    <v-card>
      <v-card-title>お問い合わせ</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field label="名前" :rules="[rules.required]" v-model="name"></v-text-field>
          <v-select label="所属" :rules="[rules.required]" :items="affiliations" v-model="affiliation"></v-select>
          <v-text-field label="所属高専" v-if="affiliation=='他高専(OBOG含む)'"></v-text-field>
          <v-text-field label="団体名" v-if="affiliation=='団体'"></v-text-field>
          <v-text-field label="メールアドレス" :rules="[rules.required, rules.email]" v-model="emailAddress"></v-text-field>
          <v-select label="お問い合わせ内容" :rules="[rules.required]" :items="inquiries" v-model="inquiry"></v-select>
          <v-textarea label="お問い合わせ内容" v-model="content"></v-textarea>
          <v-btn :disabled="!valid">送信</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      valid: false,
      name: '',
      affiliation: '',
      emailAddress: '',
      inquiry: '',
      content: '',
      rules: {
        required: value => !!value || 'Required',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
      affiliations: [
        '奈良高専(OBOG含む)',
        '他高専(OBOG含む)',
        '団体',
        '個人'
      ],
      inquiries: [
        'なにか',
        'その他'
      ]
    }
  }
}
</script>
