const audio = new Audio("../res/intro.mp3");
audio.volume = 0.1;
audio.loop = true;

const mouse = {
  ofx: 0,
  ofy: 0,
  x: 0,
  y: 0,
  active: false,
  x1: false,
  xDiff: 0,
  yDiff: 0,
};
const zIndex = 1;
const baseCrackerString = `       <div class="password-cracker radius dragable" style="left: 20%; top: 20%; z-index: 2;">
            <div class="action-bar">
                <div class="title" title="password-cracker">password-cracker</div>
                <div class="exit">&times;</div>
            </div>
            <div class="content">
                <div class="password-cracker">
                    <div class="action-bar2">
                        <div class="buttons">
                            <button class="b-btn" id="crack">Crack</button>
                            <button class="b-btn" id="reset">Reset</button>
                        </div>
                    </div>
                    <div class="content">
                        <div class="details">
                            <div class="c1">
                                <p>Target:</p>
                                <input class="input" type="text" value="23.86.111.0" id="target">
                            </div>
                            <div class="c1">
                                <p>Database:</p>
                                <input class="input" type="text" value="Database MAYER" id="database">
                            </div>
                        </div>
                        <div class="flex">
                            <table class="table">
                                <tr id="hidden">
                                    <td id="one">0</td>
                                    <td id="two">0</td>
                                    <td id="three">0</td>
                                    <td id="four">0</td>
                                    <td id="five">0</td>
                                    <td id="six">0</td>
                                </tr>
                                <tr id="random" class="green">
                                    <td id="gone">X</td>
                                    <td id="gtwo">X</td>
                                    <td id="gthree">X</td>
                                    <td id="gfour">X</td>
                                    <td id="gfive">X</td>
                                    <td id="gsix">X</td>
                                </tr>
                                <tr id="boolean">
                                    <td id="bone">F</td>
                                    <td id="btwo">F</td>
                                    <td id="bthree">F</td>
                                    <td id="bfour">F</td>
                                    <td id="bfive">F</td>
                                    <td id="bsix">F</td>
                                </tr>
                            </table>
                            <div id="lockAnimation"></div>
                        </div>
                    </div>
                    <br>
                    <div id="console" class="console" class="w">
                        <div class="state">
                            <div class="stt" id="state">STATE:</div>
                            <div class="msg" id="msg">NULL</div>
                        </div>
                        <div class="state">
                            <div class="stt">Password:</div>
                            <div class="msg" id="pmss">NULL</div>
                        </div>
                        <div id="errorCode"
                            style="display:none;color: #f00; padding-top: .5em; border-top: 1px dashed #f00;margin-top: .5em;">
                            Please, fill out all the required fields.</div>
                    </div>
                </div>
            </div>
        </div>`;

const baseErrString = ` <div style="left: 20%; top: 20%; z-index: 2;" class="password-cracker radius dragable">
            <div class="action-bar">
                <div class="title">Password-Cracker Error:</div>
                <div class="exit">&times;</div>
            </div>
            <div class="content">
                Sorry, you can't open 2 windows 
            </div>
            <div class="buttons-grp">
                <button class="btn exit">Cancel</button>
                <button class="btn exit">Ok</button>
            </div>
        </div>`;

const baseAbString = `
 <div style="left: 20%; top: 20%; z-index: 2;" class="password-cracker radius dragable">
            <div class="action-bar">
                <div class="title">About</div>
                <div class="exit">&times;</div>
            </div>
            <div class="content animationbehind">
                This website is fully created by <a href="https://t.me/humoyundeveloper">Humoyun</a>.
                Uses MODJS & DesignJS which are also created by him.
                If you want this website to be SUPER professional, support me on these social media:
                <div class="div">
                    <a href="https://t.me/humoyunprojects">Telegram</a></li>
                </div>
                <div class="div">
                    <a href="https://github.com/humoyundeveloper">GitHub</a></li>
                </div>
            </div>
            <div class="buttons-grp">
                <button class="btn exit">Cancel</button>
                <button class="btn exit">Ok</button>
            </div>
</div>
`;

const baseCCTVString = `
       <div class="password-cracker dragable" style="left: 20%; top: 20%; z-index: 2;">
            <div class="action-bar">
                <div class="title">CCTV Random:</div>
                <div class="exit">&times;</div>
            </div>
            <div class="content">
                <video class="video" src="./res/hacker.mp4" autoplay loop></video>
                <span style="animation: anim 1s linear infinite;">LIVE</span>
            </div>
        </div>`;

const baseCodeString = [
  `
from immlib import *


class CcHook(LogBpHook):

    def __init__(self):
        LogBpHook.__init__(self)
        self.imm = Debugger()

    def run(self, regs):
        self.imm.log("%08x" % regs['EIP'], regs['EIP'])
        self.imm.deleteBreakpoint(regs['EIP'])
        return


def main(args):
    imm = Debugger()

    calc = imm.getModule("calc.exe")
    imm.analyseCode(calc.getCodebase())

    functions = imm.getAllFunctions(calc.getCodebase())

    hooker = CcHook()

    for function in functions:
        hooker.add("%08x" % function, function)

    return "Tracking %d functions." % len(functions)
`,
  `
import sys
import struct
import volatility.conf as conf
import volatility.registry as registry
import volatility.commands as commands
import volatility.addrspace as addrspace
import volatility.plugins.taskmods as taskmods

equals_button = 0x01005D51

memory_file = "/Users/justin/Documents/Virtual Machines.localized/" \
              "Windows Server 2003 Standard Edition.vmwarevm/" \
              "564d9400-1cb2-63d6-722b-4ebe61759abd.vmem"
slack_space = None
trampoline_offset = None

# read in our shellcode
sc_fd = open("cmeasure.bin", "rb")
sc = sc_fd.read()
sc_fd.close()

sys.path.append("/Downloads/volatility-2.3.1")

registry.PluginImporter()
config = conf.ConfObject()

registry.register_global_options(config, commands.Command)
registry.register_global_options(config, addrspace.BaseAddressSpace)

config.parse_options()
config.PROFILE = "Win2003SP2x86"
config.LOCATION = "file://%s" % memory_file

p = taskmods.PSList(config)

for process in p.calculate():
    if str(process.ImageFileName) == "calc.exe":
        print("[*] Found calc.exe with PID %d" % process.UniqueProcessId)
        print("[*] Hunting for physical offsets...please wait.")

        address_space = process.get_process_address_space()
        pages = address_space.get_available_pages()

        for page in pages:
            physical = address_space.vtop(page[0])
            if physical is not None:
                if slack_space is None:
                    fd = open(memory_file, "r+")
                    fd.seek(physical)
                    buf = fd.read(page[1])
                    try:
                        offset = buf.index("\x00" * len(sc))
                        slack_space = page[0] + offset

                        print("[*] Found good shellcode location!")
                        print("[*] Virtual address: 0x%08x" % slack_space)
                        print("[*] Physical address: 0x%08x" % (
                                physical + offset))
                        print("[*] Injecting shellcode.")

                        fd.seek(physical + offset)
                        fd.write(sc.decode())
                        fd.flush()

                        # create our trampoline
                        tramp = "\xbb%s" % struct.pack("<L", page[0] + offset)
                        tramp += "\xff\xe3"

                        if trampoline_offset is not None:
                            break

                    except:
                        pass

                    fd.close()

                # check for our target code location
                if page[0] <= equals_button < ((page[0] + page[1]) - 7):

                    # calculate virtual offset
                    v_offset = equals_button - page[0]

                    # now calculate physical offset
                    trampoline_offset = physical + v_offset

                    print("[*] Found our trampoline target at: 0x%08x" % (
                        trampoline_offset))
                    if slack_space is not None:
                        break

        print("[*] Writing trampoline...")

        fd = open(memory_file, "r+")
        fd.seek(trampoline_offset)
        fd.write(tramp)
        fd.close()

        print("[*] Done injecting code.")
`,
];

const baseCmdString = `<div class="terminal dragable" style="left: 20%; top: 20%; z-index: 2;">
            <div class="action-bar">
                <div class="title2" contenteditable="true">Rename.txt</div>
                <div class="exit">&times;</div>
            </div>
            <div class="content">
                <pre><code id="code">Hello</code></pre>
            </div>
        </div>`;

function randomString(len, charSet) {
  charSet =
    charSet ||
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789><:)(&^%$#%^";
  var randomString = "";
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

init();
function init() {
  const typer = new Typewriter("#logs", {
    strings: ["Hacker", "version 1.0.0", "created by @Humoyun"],
    autoStart: true,
    loop: true,
    pauseFor: 5000,
  });

  document.getElementById("terminal").onclick = () => {
    document.querySelector(".screen").innerHTML += baseCmdString;
    init();
    const codeTyper = new Typewriter("#code", {
      strings: baseCodeString,
      autoStart: true,
      loop: true,
      delay: 60,
      pauseFor: 4000,
    });
  };
  document.getElementById("cctv").onclick = () => {
    document.querySelector(".screen").innerHTML += baseCCTVString;
    init();
  };
  if (document.getElementById("reset")) {
    const array = ["one", "two", "three", "four", "five", "six"];
    const generated = array.map((_e) => "g" + _e);
    const boolean = array.map((_e) => "b" + _e);
    let id = 0;

    document.getElementById("reset").onclick = () => {
      document.getElementById("target").value = "";
      document.getElementById("database").value = "";
    };

    document.getElementById("crack").onclick = (_e) => {
      if (
        document.getElementById("target").value.length <= 3 ||
        document.getElementById("database").value.length <= 3
      ) {
        document.getElementById("errorCode").style.display = "block";
        return;
      }
      let pss = "";
      let con = document.getElementById("console");
      con.classList.add("ww");
      document.getElementById("msg").innerText = "NULL";
      document.getElementById("pmss").innerText = "NULL";
      document.getElementById("errorCode").style.display = "none";
      _e.target.disabled = true;
      let char = "";
      const time = setInterval(() => {
        pss += char;
        document.getElementById(generated[id]).innerText = char;
        document.getElementById(boolean[id]).innerText = "T";
        ++id;
        if (id >= array.length) {
          clearInterval(time);
        }
      }, 2000);
      const interval = setInterval(() => {
        char = randomString(1);
        if (id >= array.length) {
          con.classList.remove("ww");
          _e.target.disabled = false;
          document.getElementById("msg").innerText =
            "Admin password found @ " + document.getElementById("target").value;
          document.getElementById("pmss").innerText = pss;
          id = 0;
          pss = "";
          clearInterval(interval);
          return;
        }
        document.getElementById(array[id]).innerText = char;
      }, 10);
    };
  }
  document.querySelector("#fullscreen-on").addEventListener("click", () => {
    document.documentElement.requestFullscreen();
  });
  document.querySelector("#about").addEventListener("click", () => {
    document.querySelector(".screen").innerHTML += baseAbString;
    init();
  });
  document
    .querySelector("#password-cracker-run")
    .addEventListener("click", () => {
      if (document.querySelector(".password-cracker")) {
        document.querySelector(".screen").innerHTML += baseErrString;
        init();
        return;
      }
      document.querySelector(".screen").innerHTML += baseCrackerString;
      init();
    });

  document.querySelectorAll(".exit").forEach((_el) => {
    _el.addEventListener("click", (e) => {
      document
        .querySelector(".screen")
        .removeChild(_el.parentElement.parentElement);
    });
  });

  document.querySelectorAll(".dragable").forEach((_e) => {
    _e.querySelector(".action-bar").addEventListener("mousedown", (_ev) => {
      document.querySelectorAll(".dragable").forEach((_ed) => {
        _ed.style.zIndex = 0;
      });
      _e.style.zIndex = 1;
      let box = _e.getBoundingClientRect();
      mouse.ofx = mouse.x - box.left;
      mouse.ofy = mouse.y - box.top;
      mouse.x1 = true;
    });
    _e.querySelector(".action-bar").addEventListener("mouseup", (_ev) => {
      mouse.x1 = false;
    });
    _e.querySelector(".action-bar").addEventListener("mouseleave", (_ev) => {
      mouse.x1 = false;
    });
    _e.querySelector(".action-bar").addEventListener("touchend", (_ev) => {
      mouse.x1 = false;
    });
    _e.querySelector(".action-bar").addEventListener("touchcancel", (_ev) => {
      mouse.x1 = false;
    });
    _e.querySelector(".action-bar").addEventListener("touchstart", (_ev) => {
      document.querySelectorAll(".dragable").forEach((_ed) => {
        _ed.style.zIndex = 0;
      });
      _e.style.zIndex = 1;
      let box = _e.getBoundingClientRect();
      mouse.ofx = mouse.x - box.left;
      mouse.ofy = mouse.y - box.top;
      mouse.x1 = true;
    });
    _e.querySelector(".action-bar").addEventListener("mousemove", (_ev) => {
      if (mouse.x1) {
        _e.style.left = mouse.x - mouse.ofx + "px";
        _e.style.top = mouse.y - mouse.ofy + "px";
      }
    });
    _e.querySelector(".action-bar").addEventListener("touchmove", (_ev) => {
      if (mouse.x1) {
        let box = _e.getBoundingClientRect();
        _e.style.left = mouse.x - box.width / 2 + "px";
        _e.style.top = mouse.y - 20 + "px";
      }
    });
  });

  let vc = document.getElementById("volume-control");
  let vb = true;

  vc.onclick = () => {
    vb = !vb;
    if (vb) {
      audio.play();
      vc.firstChild.classList.remove("fa-volume-down");
      vc.firstChild.classList.add("fa-volume-up");
    } else {
      audio.pause();
      vc.firstChild.classList.remove("fa-volume-up");
      vc.firstChild.classList.add("fa-volume-down");
    }
  };

  let el = document.getElementById("playm");
  if (el)
    el.onclick = () => {
      audio.play();
    };
}

window.addEventListener("touchstart", (_e) => {
  // mouse.ofx = _e.touches[0].clientX;
  // mouse.ofy = _e.touches[0].clientY;
  mouse.x = _e.touches[0].clientX;
  mouse.y = _e.touches[0].clientY;
  mouse.active = true;
});

window.addEventListener("touchmove", (_e) => {
  mouse.x = _e.touches[0].clientX;
  mouse.y = _e.touches[0].clientY;
});

window.addEventListener("touchend", (_e) => {
  mouse.x1 = false;
});

window.addEventListener("mousedown", (_e) => {
  // mouse.ofx = _e.clientX;
  // mouse.ofy = _e.clientY;
  mouse.x = _e.clientX;
  mouse.y = _e.clientY;
  mouse.active = true;
});

window.addEventListener("mousemove", (_e) => {
  mouse.x = _e.clientX;
  mouse.y = _e.clientY;
});

window.addEventListener("mouseup", (_e) => {
  mouse.active = false;
});

window.addEventListener("contextmenu", (_e) => {
  _e.stopPropagation();
  _e.preventDefault();
});
