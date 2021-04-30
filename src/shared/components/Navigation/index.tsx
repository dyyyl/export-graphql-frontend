import React from 'react';

import allDocumentsIcon from 'shared/assets/svg/all-documents.svg';
import approvalIcon from 'shared/assets/svg/approval.svg';
import avatarIcon from 'shared/assets/svg/avatar.svg';
import customViewIcon from 'shared/assets/svg/custom-view.svg';
import contactsIcon from 'shared/assets/svg/contacts.svg';
import exportIcon from 'shared/assets/svg/export.svg';
import inboxIcon from 'shared/assets/svg/inbox.svg';
import settingsIcon from 'shared/assets/svg/settings.svg';
import supportIcon from 'shared/assets/svg/support.svg';

import Link from 'shared/components/Link';
import MediaObject from 'shared/components/MediaObject';
import Semibold from 'shared/components/Semibold';

import NavigationContainer from './NavigationContainer';
import NavigationSection from './NavigationSection';

const Navigation: React.FC = () => (
  <NavigationContainer>
    <NavigationSection>
      <MediaObject>
        <img src={avatarIcon} alt="Inbox icon" />
        <Link to="/inbox">
          <Semibold>Business Inc</Semibold>
        </Link>
      </MediaObject>
    </NavigationSection>

    <NavigationSection hasBorder>
      <li>
        <MediaObject>
          <img src={inboxIcon} alt="Inbox icon" />
          <Link to="/inbox">
            <Semibold>Inbox (23)</Semibold>
          </Link>
        </MediaObject>
      </li>

      <li>
        <MediaObject>
          <img src={approvalIcon} alt="Inbox icon" />
          <Link to="/approval">
            <Semibold>Approval (0)</Semibold>
          </Link>
        </MediaObject>
      </li>

      <li>
        <MediaObject>
          <img src={exportIcon} alt="Inbox icon" />
          <Link to="/export">
            <Semibold>Export (0)</Semibold>
          </Link>
        </MediaObject>
      </li>
    </NavigationSection>

    <NavigationSection hasBorder>
      <li>
        <MediaObject>
          <img src={allDocumentsIcon} alt="Inbox icon" />
          <Semibold>All Documents</Semibold>
        </MediaObject>
      </li>

      <li>
        <MediaObject>
          <img src={customViewIcon} alt="Inbox icon" />
          <Semibold>+ Custom View</Semibold>
        </MediaObject>
      </li>
    </NavigationSection>

    <NavigationSection>
      <li>
        <MediaObject>
          <img src={contactsIcon} alt="Inbox icon" />
          <Semibold>Contacts</Semibold>
        </MediaObject>
      </li>

      <li>
        <MediaObject>
          <img src={settingsIcon} alt="Inbox icon" />
          <Semibold>Settings</Semibold>
        </MediaObject>
      </li>
    </NavigationSection>

    <NavigationSection>
      <li>
        <MediaObject>
          <img src={supportIcon} alt="Inbox icon" />
          <Semibold>Support</Semibold>
        </MediaObject>
      </li>
    </NavigationSection>
  </NavigationContainer>
);

export default Navigation;
