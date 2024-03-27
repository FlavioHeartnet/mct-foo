import Title from "./components/title";
import Label from "./components/label";
import Icon from "./components/icon";
import Description from "./components/description";
import Input from "./components/input";
import Textarea from "./components/textarea";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Title value={'Section'} />
      <Label value={'Label'} />
      <Icon src='/add.svg'/>
      <Icon src='/minus.svg'/>
      <Description value={'no sections added'} />
      <Input/>
      <div className="mt-5"></div>
      <Textarea/>
    </main>
  );
}
