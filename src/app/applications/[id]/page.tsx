import { Application } from '@/lib/db/types';

import { ApplicationView } from './_components/application-view';
import { getApplicationById } from './getApplicationsData';

export default async function ApplicationPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const application = (await getApplicationById(id)) as Application;
  return <ApplicationView application={application} />;
}
