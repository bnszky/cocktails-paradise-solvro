import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "../ui/alert-dialog"

  interface CustomAlertDialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    acceptMessage?: string | null;
    cancelMessage?: string | null;
  }
  
  export function CustomAlertDialog({ isOpen, onClose, title, message, acceptMessage = "Continue", cancelMessage = "Cancel" } : CustomAlertDialogProps) {
    return (
      <AlertDialog open={isOpen} onOpenChange={onClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>
              {message}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {cancelMessage && <AlertDialogCancel onClick={onClose}>{cancelMessage}</AlertDialogCancel>}
            {acceptMessage && <AlertDialogAction onClick={onClose}>{acceptMessage}</AlertDialogAction>}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
