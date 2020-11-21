<template>
  <v-container>
    <Loading v-show="loading" />
    <Title en="Contact" ja="お問い合わせ" />
    <v-card id="contactForm" tile outlined>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field v-model="name" label="名前" :rules="[rules.required]" />
          <v-select v-model="affiliation" label="所属" :rules="[rules.required]" :items="affiliations" />
          <v-text-field v-show="affiliation=='他高専(OBOG含む)'" v-model="affiliation_kosen" label="所属高専" />
          <v-text-field v-show="affiliation=='団体'" v-model="affiliation_group" label="団体名" />
          <v-text-field v-model="emailAddress" label="メールアドレス" :rules="[rules.required, rules.email]" />
          <v-select v-model="inquiry" label="お問い合わせ内容" :rules="[rules.required]" :items="inquiries" />
          <v-textarea v-model="content" label="お問い合わせ詳細" :rules="[rules.required]" />
          <v-btn :disabled="!valid" @click="submit">
            送信
          </v-btn>
        </v-form>
        <v-snackbar v-model="successSnackbar" color="success" top app transition="scroll-y-transition">
          送信成功
        </v-snackbar>
        <v-snackbar v-model="failureSnackbar" color="error" top app transition="scroll-y-transition">
          送信失敗<br>{{ message }}
        </v-snackbar>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Loading from '@/components/Loading'
import Title from '@/components/Title'
import { CONTACT_URL } from '@/config/url.js'

export default {
  components: {
    Loading,
    Title
  },
  data: function() {
    return {
      valid: false,
      name: '',
      affiliation: '',
      affiliation_kosen: '',
      affiliation_group: '',
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
        '活動について',
        '演奏会について',
        '依頼等',
        'その他'
      ],
      successSnackbar: false,
      failureSnackbar: false,
      message: '',
      loading: false,
    }
  },
  methods: {
    submit(){
      this.loading = true;
      let affiliation_kosen = this.affiliation_kosen;
      let affiliation_group = this.affiliation_group;
      if(this.affiliation == "奈良高専(OBOG含む)" || this.affiliation == "個人"){
        affiliation_kosen = '';
        affiliation_group = '';
      }
      if(this.affiliation == "他高専(OBOG含む)"){
        affiliation_group = '';
      }
      if(this.affiliation == "団体"){
        affiliation_kosen = '';
      }
      let params = new URLSearchParams();
      params.append("name", this.name);
      params.append("affiliation", this.affiliation);
      params.append("affiliation_kosen", affiliation_kosen);
      params.append("affiliation_group", affiliation_group);
      params.append("mail", this.emailAddress);
      params.append("inquiry", this.inquiry);
      params.append("content", this.content);
      this.axios.post(CONTACT_URL, params).then(res => {
        this.loading = false;
        if(res.data['success'] == 'true'){
          this.successSnackbar = true;
          this.$refs.form.reset()
        }else{
          this.failureSnackbar = true;
          this.message = res.data['message']
        }
      }).catch(() => {
          this.failureSnackbar = true;
      })
    }
  }
}
</script>

<style scoped>
.theme--light.v-card.v-card--outlined {
    border: none;
}

#contactForm{
  max-width: 664px;
  margin: 0 auto;
}
</style>
