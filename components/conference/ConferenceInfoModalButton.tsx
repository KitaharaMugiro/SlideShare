import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { addHours } from 'date-fns';
import { useRouter } from 'next/dist/client/router';
import * as React from 'react';
import { useState } from 'react';
import useConference from '../../model/hooks/useConference';
import ConferenceDatePicker from './ConferenceDatePicker';

interface Props {
  slideId: number
}

export default function ConferenceInfoModalButton(props: Props) {
  const today = new Date();
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [conferenceName, setConferenceName] = useState('');
  const [conferenceStartDate, setConferenceStartDate] = useState(today);
  const [conferenceEndDate, setConferenceEndDate] = useState(addHours(today, 1));

  const { createConference } = useConference()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickOk = async () => {
    setLoading(true);
    await createConference(props.slideId, conferenceName, conferenceStartDate, conferenceEndDate)
    setOpen(false);
    setLoading(false);
    router.push(`/presentation/${props.slideId}`)
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        このスライドで発表する
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>開催日時を設定する</DialogTitle>
        <DialogContent>
          <DialogContentText>
            あなたがスライドを発表する日時を設定します。
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="タイトル"
            value={conferenceName}
            onChange={(e) => setConferenceName(e.target.value)}
            fullWidth
            variant="standard"
            InputProps={{
              style: { color: "white" }
            }}
          />
          <div style={{ height: 20 }} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: 10 }}>開始日時:</div>
            <ConferenceDatePicker
              value={conferenceStartDate}
              onChange={setConferenceStartDate}
            />
          </div>
          <div style={{ height: 5 }} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: 10 }}>終了日時:</div>
            <ConferenceDatePicker
              value={conferenceEndDate}
              onChange={setConferenceEndDate} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onClickOk}>{loading ? "Loading..." : "OK"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}