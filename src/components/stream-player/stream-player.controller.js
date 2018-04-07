export default {
    name: 'stream-player',
    props: {
        stream: String
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
            if(!this.embeded){
                console.log('Setting stream to:', this.stream);
                this.embeded = new Twitch.Embed("twitch-embed", {
                    width: 854,
                    height: 480,
                    channel: this.stream
                });
            } else {
                this.embeded.getPlayer().setChannel(this.stream);
            }

            console.log(this.embeded);
        }
    }
}