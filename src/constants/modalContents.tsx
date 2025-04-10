import { SequenciaDownload } from "../components/Modal/contents/SequenciaDownload";

export const modalContents: Record<string, { title: string; content: JSX.Element }> = {
    baixarSequencias: {
      title: "Baixar XML",
      content: <SequenciaDownload/>,

    },

  };
