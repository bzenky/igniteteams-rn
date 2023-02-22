import { useCallback, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { GroupCard } from '@components/GroupCard'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'
import { Loading } from '@components/Loading'
import { groupsGetAll } from '@storage/group/groupsGetAll'
import { Container } from './styles'

export function Groups() {
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)
      const data = await groupsGetAll()
      setGroups(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      Alert.alert('Turmas', 'Não foi possível carregar as turmas')
    }
  }

  function handleOpenGroup(group: string) {
    return (
      navigation.navigate('players', { group })
    )
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />

      <Highlight
        title='Turmas'
        subtitle='jogue com sua turma'
      />

      {isLoading
        ? <Loading />
        : (
          <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <GroupCard
                title={item}
                onPress={() => handleOpenGroup(item)}
              />
            )}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
            ListEmptyComponent={() => (
              <ListEmpty
                message='Que tal cadastrar a primeira turma?'
              />
            )}
          />
        )
      }


      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  )
}