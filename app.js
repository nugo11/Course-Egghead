let main_container = document.getElementsByTagName("main");
let wholePage = document.getElementsByTagName("body");
let head = document.getElementsByTagName("header");
let intr = document.getElementsByTagName("div");
let foot = document.getElementsByTagName("footer");
let fotul = document.getElementsByTagName('ul');

export function wholePageStyle(pad, marg, bord, font) {
  wholePage[0].style.margin = marg;
  wholePage[0].style.padding = pad;
  wholePage[0].style.boxSizing = bord;
  wholePage[0].style.fontFamily = font;
}

export function header(wi, he, dis, dir, back, ju, al) {
  let header = document.createElement("header");
  main_container[0].appendChild(header);
  header.style.width = wi;
  header.style.height = he;
  header.style.display = dis;
  header.style.flexDirection = dir;
  header.style.backgroundColor = back;
  header.style.justifyContent = ju;
  header.style.alignItems = al;
}

export function intro(texal, wi, di, dir, al) {
  let intro = document.createElement("div");
  head[0].appendChild(intro);
  intro.style.textAlign = texal;
  intro.style.width = wi;
  intro.style.display = di;
  intro.style.flexDirection = dir;
  intro.style.alignItems = al;
}

export function introH2(colH2, fsizeH2, lheiH2, lspeH2) {
  let introH2 = document.createElement("h2");
  intr[0].appendChild(introH2);
  introH2.textContent = "welcome";
  introH2.style.color = colH2;
  introH2.style.fontSize = fsizeH2;
  introH2.style.lineHeight = lheiH2;
  introH2.style.letterSpacing = lspeH2;
}

export function introH1(colH1, fsizeH1, lheiH1, lspeH1) {
  let introH1 = document.createElement("h1");
  intr[0].appendChild(introH1);
  introH1.textContent = "Selling on the internet like a pro";
  introH1.style.color = colH1;
  introH1.style.fontSize = fsizeH1;
  introH1.style.lineHeight = lheiH1;
  introH1.style.letterSpacing = lspeH1;
}

export function introP(colP, fsizeP, lheiP, lspeP) {
  let introP = document.createElement("p");
  intr[0].appendChild(introP);
  introP.textContent =
    "We know how large objects will act, but things on a small scale just do not act that way.";
  introP.style.color = colP;
  introP.style.fontSize = fsizeP;
  introP.style.lineHeight = lheiP;
  introP.style.letterSpacing = lspeP;
}

export function introButtonDiv(
  colBut,
  BackBut,
  padBut,
  marBut,
  borBut,
  borderBut,
  BackBut2,
  borderBut2,
  colBut2
) {
  let introButtonDiv = document.createElement("div");
  intr[0].appendChild(introButtonDiv);

  let introB1 = document.createElement("button");
  introButtonDiv.appendChild(introB1);
  introB1.textContent = "Get Quote Now";
  introB1.style.color = colBut;
  introB1.style.backgroundColor = BackBut;
  introB1.style.padding = padBut;
  introB1.style.marginRight = marBut;
  introB1.style.borderRadius = borBut;
  introB1.style.border = borderBut;

  let introB2 = document.createElement("button");
  introButtonDiv.appendChild(introB2);
  introB2.textContent = "Learn More";
  introB2.style.color = colBut2;
  introB2.style.backgroundColor = BackBut2;
  introB2.style.padding = padBut;
  introB2.style.marginRight = marBut;
  introB2.style.borderRadius = borBut;
  introB2.style.border = borderBut2;
}

export function blocks(width, display, marginTop) {
  let blocks = document.createElement("div");
  head[0].appendChild(blocks);
  blocks.style.width = width;
  blocks.style.display = display;
  blocks.style.marginTop = marginTop;
}

export function bl(b1h, b1p, b1mb, display) {
  let block1 = document.createElement("div");
  intr[2].appendChild(block1);

  intr[3].style.height = b1h;
  intr[3].style.padding = b1p;
  intr[3].style.marginBottom = b1mb;
  intr[3].style.display = display;
}

export function block1(
  img,
  imgSize,
  iconW,
  iconH,
  fh1,
  hrw,
  hrh,
  hrbc,
  pc,
  pfs,
  txtH1,
  txtP,
  groupbac,
  bckh1c
) {
  let group = document.createElement("ul");
  intr[3].appendChild(group);
  group.style.margin = "10px";
  group.style.backgroundColor = groupbac;
  group.style.padding = "30px";

  let icon = document.createElement("ul");
  group.appendChild(icon);
  icon.style.background = img;
  icon.style.backgroundSize = imgSize;
  icon.style.width = iconW;
  icon.style.height = iconH;

  let blckH1 = document.createElement("h1");
  group.appendChild(blckH1);
  blckH1.textContent = txtH1;
  blckH1.style.fontSize = fh1;
  blckH1.style.color = bckh1c;

  let blckHr = document.createElement("div");
  group.appendChild(blckHr);
  blckHr.style.width = hrw;
  blckHr.style.height = hrh;
  blckHr.style.backgroundColor = hrbc;

  let blckP = document.createElement("p");
  group.appendChild(blckP);
  blckP.textContent = txtP;
  blckP.style.color = pc;
  blckP.style.fontSize = pfs;
}

export function footer(fh, fd, fdd, fai, fjf) {
  let footer = document.createElement('footer');
  main_container[0].appendChild(footer);
  footer.style.height = fh;
  footer.style.display = fd;
  footer.style.flexDirection = fdd;
  footer.style.alignItems = fai;
  footer.style.justifyContent = fjf;
}

export function fintro(fh2c, fh2fs) {
  let fintroh2 = document.createElement('h2');
  foot[0].appendChild(fintroh2);
  fintroh2.textContent = 'Practice Advice';
  fintroh2.style.color = fh2c;
  fintroh2.style.fontSize = fh2fs;
}

export function fintro1(fh1c, fh1fs) {
  let fintroh1 = document.createElement('h1');
  foot[0].appendChild(fintroh1);
  fintroh1.textContent = 'Featured Products';
  fintroh1.style.color = fh1c;
  fintroh1.style.fontSize = fh1fs;
}

export function fintro2(fic, fifs) {
  let fintrop = document.createElement('p');
  foot[0].appendChild(fintrop);
  fintrop.textContent = 'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics';
  fintrop.style.color = fic;
  fintrop.style.fontSize = fifs;
}

export function inputflex() {
  let inputflex = document.createElement('ul');
  foot[0].appendChild(inputflex);

}

export function finput(finp, finb, finbr, finbc) {
  let finp1 = document.createElement('input');
  fotul[6].appendChild(finp1);
  finp1.placeholder = 'Your Email';
  finp1.style.padding = finp;
  finp1.style.border = finb;
  finp1.style.borderRadius = finbr;
  finp1.style.backgroundColor = finbc;
}

export function fbut(fbnp, fbnb, fbnbr, fbnbc, fbnc) {
  let fbutton = document.createElement('button');
  fotul[6].appendChild(fbutton);
  fbutton.textContent = 'Subscribe';
  fbutton.style.padding = fbnp;
  fbutton.style.border = fbnb;
  fbutton.style.borderRadius = fbnbr;
  fbutton.style.backgroundColor = fbnbc;
  fbutton.style.color = fbnc;
}