export const state = () => ({
    theme: 'theme-dark',
    loading: false,
    linkShared: ''
});

export const actions = {
    changeTheme({ commit }, theme) {
        commit('setTheme', theme);
    },
    loading({ commit }, loading) {
        commit('setLoading', loading);
    },
    linkShared({ commit }, link) {
        commit('setLinkShared', link);
    },
}

export const mutations = {
    setTheme(state, theme) {
        state.theme = theme;
    },
    setLoading(state, loading) {
        state.loading = loading;
    },
    setLinkShared(state, link) {
        state.linkShared = link;
    },
}
