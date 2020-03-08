Recaptcha = {}
Recaptcha.Settings = nil;

function Recaptcha.SetController(Public, Private)
	Recaptcha.Settings = {Public=Public, Private=Private};
    return Recaptcha.Settings;
end

function Recaptcha.Create(Image)
	if Recaptcha.Settings.Public == nil or Recaptcha.Settings.Public == "" then
		Application.SetLastError(845001);
		return false;
	else
		getchallenge = "";
		connect = HTTP.TestConnection("http://www.recaptcha.net", 20, 80, nil, nil);
        if connect then
			get = HTTP.Submit("http://api.recaptcha.net/challenge", {k=Recaptcha.Settings.Public}, SUBMITWEB_GET, 20, 80, nil, nil);
			strstart = String.Find(get, "'", 1, false);
			strend = String.Find(get, ",", 1, false);
			getchallenge = String.Mid(get, 42, strend-strstart);
			gen = Math.Random(0, 100000000);
			captcha = _TempFolder.."\\recaptcha\\cid?"..gen..".tmp"
			HTTP.Download("http://api.recaptcha.net/image?c="..getchallenge, captcha, MODE_BINARY, 20, 80, nil, nil, nil);
			Image.SetSize(eImage, 300, 57);
			Image.Load(eImage, captcha);
			TextFile.WriteFromString(_TempFolder.."\\recaptcha\\recaptcha.tmp", eImage, false);
			Application.SetLastError(845000);
			return true;
		else
			Application.SetLastError(845004);
			return false;
	 	end
 	 end
end

function Recaptcha.Authorize(eResponce)
	if Recaptcha.Settings.Private == nil or Recaptcha.Settings.Private == "" then
		Application.SetLastError(845002);
		return false;
	else
		user = System.GetLANInfo();
		connect = HTTP.TestConnection("http://www.google.com", 20, 80, nil, nil);
		
		if connect == true then
			Authorize = HTTP.Submit("http://api-verify.recaptcha.net/verify", {privatekey=Recaptcha.Settings.Private, remoteip=user.IP, challenge=getchallenge, response=eResponce}, SUBMITWEB_POST, 20, 80, nil, nil);
			check = String.Mid(Authorize, 1, 1);
			if check == "t" then
				Application.SetLastError(845000);
				return true;
			elseif check == "f" then
				TmpImg = TextFile.ReadToString(_TempFolder.."\\recaptcha\\recaptcha.tmp");
				Recaptcha.Create(TmpImg);
				Application.SetLastError(845003);
				return false;
			else
				Application.SetLastError(845004);
				return false;
			end
		end
	end
end

function Recaptcha.Cleanup()
	temp = Folder.DoesExist(_TempFolder.."\\recaptcha");
	if temp == true then
		Folder.DeleteTree(_TempFolder.."\\recaptcha", nil);
		return true;
	elseif temp == false then
		return false;
	end
end

_tblErrorMessages[845000] = "Success!";
_tblErrorMessages[845001] = "Missing reCAPTCHA Public key.";
_tblErrorMessages[845002] = "Missing reCAPTCHA Private key.";
_tblErrorMessages[845003] = "The CAPTCHA solution was incorrect";
_tblErrorMessages[845004] = "There was no Internet connection detected";