import { useParams } from 'react-router-dom';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';

const ProfilePage = () => {
  const { id } = useParams();

  if (!id) {
    return <Text text="Профиль не найден" theme="error" />;
  }

  return (
    <Page>
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default ProfilePage;
