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
import { useTranslations } from 'use-intl';
import useConference from '../../model/hooks/useConference';
import ConferenceDatePicker from './ConferenceDatePicker';

interface Props {
  slideId: number
  initialTitle?: string
  initialStartDate?: Date
  initialEndDate?: Date
  updateConferenceId?: number
}

export default function ConferenceInfoModalButton(props: Props) {
  const t = useTranslations("Conference")

  const today = new Date();
  const router = useRouter()

  //local states
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [conferenceName, setConferenceName] = useState(props.initialTitle || "");
  const [conferenceStartDate, setConferenceStartDate] = useState(props.initialStartDate || today);
  const [conferenceEndDate, setConferenceEndDate] = useState(addHours(props.initialEndDate || today, 1));

  const { createConference, updateConference } = useConference()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickOk = async () => {
    if (!conferenceName) {
      window.alert("Please enter a conference name")
      return
    }
    setLoading(true);
    if (props.updateConferenceId) {
      await updateConference(props.updateConferenceId, conferenceName, conferenceStartDate, conferenceEndDate);
    } else {
      await createConference(props.slideId, conferenceName, conferenceStartDate, conferenceEndDate)
    }
    setOpen(false);
    setLoading(false);
    router.push(`/presentation/${props.slideId}`)
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {props.updateConferenceId ? t("fix-presentation-date") : t("present-with-this-slide")}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t("set-the-date")}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t("set-the-date-description")}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={t("title-placeholder")}
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
            <div style={{ marginRight: 10 }}>{t("start-date")}:</div>
            <ConferenceDatePicker
              value={conferenceStartDate}
              onChange={setConferenceStartDate}
            />
          </div>
          <div style={{ height: 5 }} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: 10 }}>{t("end-date")}:</div>
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