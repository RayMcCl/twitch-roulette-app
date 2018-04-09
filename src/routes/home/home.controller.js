import API from '~/services/api-service';

export default {
    name: "home",
    props: {},
    methods: {
        getRandomStream () {
            this.$router.push('/loading');
            this.$store
                .dispatch('setRandomStream')
                .then((res) => {
                    this.$router.push('/stream');
                });
        }
    }
};