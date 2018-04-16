export default {
    name: 'stream-player',
    props: {
        stream: Object
    },
    watch: { 
        stream: function () {
            this.embedPlayer();
        }
    },
    beforeMount() {
        this.injectTwitchScript();
    },
    mounted() {
        this.embedPlayer();
    },
    methods: {
        injectTwitchScript: function () {
            if(!window.Twitch){
                let twitchPlayer = document.createElement('script');
                twitchPlayer.setAttribute('src', 'https://embed.twitch.tv/embed/v1.js');
                document.head.appendChild(twitchPlayer);
            }
        },
        embedPlayer: function () {
            console.log(this.stream);
            if(!this.embeded){
                this.embeded = new Twitch.Embed("twitch-embed", {
                    layout: 'video',
                    channel: this.stream.stream_name
                });
            } else {
                this.embeded.getPlayer().setChannel(this.stream.stream_name);
            }
        }
    }
}