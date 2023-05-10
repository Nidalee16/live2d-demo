let localEnv = 'stage'

if (localEnv !== 'prd') localEnv += '.'
else localEnv = ''

const GPT域名 = window.location.origin.includes('exai-gpt-greeter-web-app')
  ? window.location.origin.replace('exai-gpt-greeter-web-app', '47.89.229.195:8889')
  : 'http://47.89.229.195:8889'

// ---------- TODO ------------

const ASR域名 = window.location.origin.includes('exai-gpt-greeter-web-app')
  ? window.location.origin.replace('exai-gpt-greeter-web-app', '47.89.229.195:8889')
  : 'http://47.89.229.195:8889'

const TTS域名 = window.location.origin.includes('exai-gpt-greeter-web-app')
    ? window.location.origin.replace('exai-gpt-greeter-web-app', '47.89.229.195:8889')
    : 'http://47.89.229.195:8889'

// ---------- TODO socket, brain, dialogue ---------------

const Hosts: { [key: string]: string } = {
  GPT域名,
  ASR域名,
  TTS域名
}

export default Hosts
