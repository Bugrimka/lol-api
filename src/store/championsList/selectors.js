export const getChampionsListLoading = (state) => state.championsList.loading
export const getChampionsListData = (state) => {
    const collator = new Intl.Collator("ru")
    return Object.keys(state.championsList.data).map((keys) => state.championsList.data[keys]).sort(
        (a, b) => collator.compare(a.name, b.name)
    )
}