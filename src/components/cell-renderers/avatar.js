import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export function renderAvatar(params) {
  if (params.value == null) {
    return '';
  }

  return (
    <Avatar style={{ backgroundColor: params.value.color }}>
      {params.value.lastName.toUpperCase().substring(0, 1)}
    </Avatar>
  );
}
