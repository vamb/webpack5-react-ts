import React from 'react'
import styled from "styled-components";

const TestTitle = () => {

  return(
    <Wrapper>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  @keyframes img-change {
    0% { background-image: url(${require('../../../assets/test/1_00000.png')}); }
    1.63% { background-image: url(${require('../../../assets/test/1_00001.png')}); }
    3.27% { background-image: url(${require('../../../assets/test/1_00002.png')}); }
    4.91% { background-image: url(${require('../../../assets/test/1_00003.png')}); }
    6.55% { background-image: url(${require('../../../assets/test/1_00004.png')}); }
    8.19% { background-image: url(${require('../../../assets/test/1_00005.png')}); }
    9.83% { background-image: url(${require('../../../assets/test/1_00006.png')}); }
    11.47% { background-image: url(${require('../../../assets/test/1_00007.png')}; }
    13.11% { background-image: url(${require('../../../assets/test/1_00008.png')}; }
    14.75% { background-image: url(${require('../../../assets/test/1_00009.png')}; }
    16.39% { background-image: url(${require('../../../assets/test/1_00010.png')}; }
    
    18.03% { background-image: url(${require('../../../assets/test/1_00011.png')}; }
    19.67% { background-image: url(${require('../../../assets/test/1_00012.png')}; }
    21.31% { background-image: url(${require('../../../assets/test/1_00013.png')}; }
    22.95% { background-image: url(${require('../../../assets/test/1_00014.png')}; }
    24.59% { background-image: url(${require('../../../assets/test/1_00015.png')}; }
    26.23% { background-image: url(${require('../../../assets/test/1_00016.png')}; }
    27.86% { background-image: url(${require('../../../assets/test/1_00017.png')}; }
    29.50% { background-image: url(${require('../../../assets/test/1_00018.png')}; }
    31.14% { background-image: url(${require('../../../assets/test/1_00019.png')}; }
    32.78% { background-image: url(${require('../../../assets/test/1_00020.png')}; }
    
    34.42% { background-image: url(${require('../../../assets/test/1_00021.png')}; }
    36.06% { background-image: url(${require('../../../assets/test/1_00022.png')}; }
    37.70% { background-image: url(${require('../../../assets/test/1_00023.png')}; }
    39.34% { background-image: url(${require('../../../assets/test/1_00024.png')}; }
    40.98% { background-image: url(${require('../../../assets/test/1_00025.png')}; }
    42.62% { background-image: url(${require('../../../assets/test/1_00026.png')}; }
    44.26% { background-image: url(${require('../../../assets/test/1_00027.png')}; }
    45.90% { background-image: url(${require('../../../assets/test/1_00028.png')}; }
    47.54% { background-image: url(${require('../../../assets/test/1_00029.png')}; }
    49.18% { background-image: url(${require('../../../assets/test/1_00030.png')}; }
    
    50.81% { background-image: url(${require('../../../assets/test/1_00031.png')}); }
    52.45% { background-image: url(${require('../../../assets/test/1_00032.png')}); }
    54.09% { background-image: url(${require('../../../assets/test/1_00033.png')}); }
    55.73% { background-image: url(${require('../../../assets/test/1_00034.png')}); }
    57.37% { background-image: url(${require('../../../assets/test/1_00035.png')}); }
    59.01% { background-image: url(${require('../../../assets/test/1_00036.png')}); }
    60.65% { background-image: url(${require('../../../assets/test/1_00037.png')}); }
    62.29% { background-image: url(${require('../../../assets/test/1_00038.png')}); }
    63.93% { background-image: url(${require('../../../assets/test/1_00039.png')}); }
    65.57% { background-image: url(${require('../../../assets/test/1_00040.png')}); }

    67.21% { background-image: url(${require('../../../assets/test/1_00041.png')}); }
    70.49% { background-image: url(${require('../../../assets/test/1_00042.png')}'); }
    72.13% { background-image: url(${require('../../../assets/test/1_00043.png')}'); }
    73.77% { background-image: url(${require('../../../assets/test/1_00044.png')}'); }
    75.40% { background-image: url(${require('../../../assets/test/1_00045.png')}'); }
    77.04% { background-image: url(${require('../../../assets/test/1_00046.png')}'); }
    16.39% { background-image: url(${require('../../../assets/test/1_00047.png')}'); }
    78.68% { background-image: url(${require('../../../assets/test/1_00048.png')}'); }
    80.32% { background-image: url(${require('../../../assets/test/1_00049.png')}'); }
    81.96% { background-image: url(${require('../../../assets/test/1_00050.png')}'); }

    83.60% { background-image: url(${require('../../../assets/test/1_00051.png')}); }
    85.24% { background-image: url(${require('../../../assets/test/1_00052.png')}'); }
    86.88% { background-image: url(${require('../../../assets/test/1_00053.png')}'); }
    88.52% { background-image: url(${require('../../../assets/test/1_00054.png')}'); }
    90.16% { background-image: url(${require('../../../assets/test/1_00055.png')}'); }
    91.80% { background-image: url(${require('../../../assets/test/1_00056.png')}'); }
    93.44% { background-image: url(${require('../../../assets/test/1_00057.png')}'); }
    95.08% { background-image: url(${require('../../../assets/test/1_00058.png')}'); }
    96.72% { background-image: url(${require('../../../assets/test/1_00059.png')}'); }
    98.36% { background-image: url(${require('../../../assets/test/1_00060.png')}'); }

    100% { background-image: url(${require('../../../assets/test/1_00061.png')}'); }
  }
  
  position: relative;
  height: 592px;
  animation: img-change 2s steps(61) 0s infinite normal none running;
  background-repeat: no-repeat;
  
`

export default TestTitle
