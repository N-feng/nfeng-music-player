import SearchBar from '@/components/SearchBar'
import { TracksList } from '../../../components/TracksList'
import { screenPadding } from '@/constants/Tokens'
import { trackTitleFilter } from '@/helpers/filter'
import { generateTracksListId } from '@/helpers/miscellaneous'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { useTracks } from '@/store/library'
import { defaultStyles } from '@/styles'
import { useMemo, useState } from 'react'
import { ScrollView, View } from 'react-native'

const SongsScreen = () => {
	// const search = useNavigationSearch({
	// 	searchBarOptions: {
	// 		placeholder: 'Find in songs',
	// 	},
	// })

	const tracks = useTracks()

	// const filteredTracks = useMemo(() => {
	// 	if (!search) return tracks

	// 	return tracks.filter(trackTitleFilter(search))
	// }, [search, tracks])
	
	const [searchPhrase, setSearchPhrase] = useState("");
	const [clicked, setClicked] = useState(false);

	const filteredTracks = useMemo(() => {
		if (!searchPhrase) return tracks

		return tracks.filter(trackTitleFilter(searchPhrase))
	}, [searchPhrase, tracks])

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<SearchBar
					searchPhrase={searchPhrase}
					setSearchPhrase={setSearchPhrase}
					clicked={clicked}
					setClicked={setClicked}
				/>
				<TracksList
					id={generateTracksListId('songs', searchPhrase)}
					tracks={filteredTracks}
					scrollEnabled={false}
				/>
			</ScrollView>
		</View>
	)
}

export default SongsScreen
