import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";

import {geo} from "./world_contries"

import Box from "@mui/material/Box";

import { ResponsiveChoropleth } from '@nivo/geo'


// big data from website
const data =[
  {
    "id": "AFG",
    "value": 590917
  },
  {
    "id": "AGO",
    "value": 996794
  },
  {
    "id": "ALB",
    "value": 87177
  },
  {
    "id": "ARE",
    "value": 67950
  },
  {
    "id": "ARG",
    "value": 243456
  },
  {
    "id": "ARM",
    "value": 376270
  },
  {
    "id": "ATA",
    "value": 971450
  },
  {
    "id": "ATF",
    "value": 945592
  },
  {
    "id": "AUT",
    "value": 185696
  },
  {
    "id": "AZE",
    "value": 484362
  },
  {
    "id": "BDI",
    "value": 17774
  },
  {
    "id": "BEL",
    "value": 45571
  },
  {
    "id": "BEN",
    "value": 384268
  },
  {
    "id": "BFA",
    "value": 329883
  },
  {
    "id": "BGD",
    "value": 422517
  },
  {
    "id": "BGR",
    "value": 890606
  },
  {
    "id": "BHS",
    "value": 162149
  },
  {
    "id": "BIH",
    "value": 266301
  },
  {
    "id": "BLR",
    "value": 496959
  },
  {
    "id": "BLZ",
    "value": 972341
  },
  {
    "id": "BOL",
    "value": 900441
  },
  {
    "id": "BRN",
    "value": 916301
  },
  {
    "id": "BTN",
    "value": 416046
  },
  {
    "id": "BWA",
    "value": 85964
  },
  {
    "id": "CAF",
    "value": 140505
  },
  {
    "id": "CAN",
    "value": 51109
  },
  {
    "id": "CHE",
    "value": 284921
  },
  {
    "id": "CHL",
    "value": 814245
  },
  {
    "id": "CHN",
    "value": 37569
  },
  {
    "id": "CIV",
    "value": 98929
  },
  {
    "id": "CMR",
    "value": 977436
  },
  {
    "id": "COG",
    "value": 269692
  },
  {
    "id": "COL",
    "value": 572904
  },
  {
    "id": "CRI",
    "value": 341898
  },
  {
    "id": "CUB",
    "value": 434347
  },
  {
    "id": "-99",
    "value": 598120
  },
  {
    "id": "CYP",
    "value": 557454
  },
  {
    "id": "CZE",
    "value": 321471
  },
  {
    "id": "DEU",
    "value": 815910
  },
  {
    "id": "DJI",
    "value": 928841
  },
  {
    "id": "DNK",
    "value": 223274
  },
  {
    "id": "DOM",
    "value": 69960
  },
  {
    "id": "DZA",
    "value": 534225
  },
  {
    "id": "ECU",
    "value": 940397
  },
  {
    "id": "EGY",
    "value": 782140
  },
  {
    "id": "ERI",
    "value": 53984
  },
  {
    "id": "ESP",
    "value": 29853
  },
  {
    "id": "EST",
    "value": 696712
  },
  {
    "id": "ETH",
    "value": 798770
  },
  {
    "id": "FIN",
    "value": 918878
  },
  {
    "id": "FJI",
    "value": 245966
  },
  {
    "id": "FLK",
    "value": 37707
  },
  {
    "id": "FRA",
    "value": 438948
  },
  {
    "id": "GAB",
    "value": 54380
  },
  {
    "id": "GBR",
    "value": 735137
  },
  {
    "id": "GEO",
    "value": 496585
  },
  {
    "id": "GHA",
    "value": 525794
  },
  {
    "id": "GIN",
    "value": 954107
  },
  {
    "id": "GMB",
    "value": 460535
  },
  {
    "id": "GNB",
    "value": 335768
  },
  {
    "id": "GNQ",
    "value": 481903
  },
  {
    "id": "GRC",
    "value": 864458
  },
  {
    "id": "GTM",
    "value": 983296
  },
  {
    "id": "GUY",
    "value": 843968
  },
  {
    "id": "HND",
    "value": 330792
  },
  {
    "id": "HRV",
    "value": 157900
  },
  {
    "id": "HTI",
    "value": 606466
  },
  {
    "id": "HUN",
    "value": 136537
  },
  {
    "id": "IDN",
    "value": 435961
  },
  {
    "id": "IND",
    "value": 333618
  },
  {
    "id": "IRL",
    "value": 825057
  },
  {
    "id": "IRN",
    "value": 736459
  },
  {
    "id": "IRQ",
    "value": 692771
  },
  {
    "id": "ISL",
    "value": 109296
  },
  {
    "id": "ISR",
    "value": 112527
  },
  {
    "id": "ITA",
    "value": 32962
  },
  {
    "id": "JAM",
    "value": 208587
  },
  {
    "id": "JOR",
    "value": 825671
  },
  {
    "id": "JPN",
    "value": 129426
  },
  {
    "id": "KAZ",
    "value": 683278
  },
  {
    "id": "KEN",
    "value": 934307
  },
  {
    "id": "KGZ",
    "value": 92999
  },
  {
    "id": "KHM",
    "value": 880732
  },
  {
    "id": "OSA",
    "value": 526736
  },
  {
    "id": "KWT",
    "value": 831384
  },
  {
    "id": "LAO",
    "value": 175265
  },
  {
    "id": "LBN",
    "value": 262216
  },
  {
    "id": "LBR",
    "value": 374483
  },
  {
    "id": "LBY",
    "value": 595877
  },
  {
    "id": "LKA",
    "value": 837272
  },
  {
    "id": "LSO",
    "value": 14037
  },
  {
    "id": "LTU",
    "value": 776408
  },
  {
    "id": "LUX",
    "value": 788156
  },
  {
    "id": "LVA",
    "value": 875914
  },
  {
    "id": "MAR",
    "value": 871813
  },
  {
    "id": "MDA",
    "value": 342976
  },
  {
    "id": "MDG",
    "value": 683308
  },
  {
    "id": "MEX",
    "value": 932909
  },
  {
    "id": "MKD",
    "value": 386536
  },
  {
    "id": "MLI",
    "value": 573153
  },
  {
    "id": "MMR",
    "value": 518613
  },
  {
    "id": "MNE",
    "value": 27709
  },
  {
    "id": "MNG",
    "value": 164277
  },
  {
    "id": "MOZ",
    "value": 48831
  },
  {
    "id": "MRT",
    "value": 990625
  },
  {
    "id": "MWI",
    "value": 562635
  },
  {
    "id": "MYS",
    "value": 408912
  },
  {
    "id": "NAM",
    "value": 315109
  },
  {
    "id": "NCL",
    "value": 542117
  },
  {
    "id": "NER",
    "value": 183947
  },
  {
    "id": "NGA",
    "value": 994260
  },
  {
    "id": "NIC",
    "value": 193224
  },
  {
    "id": "NLD",
    "value": 28530
  },
  {
    "id": "NOR",
    "value": 321156
  },
  {
    "id": "NPL",
    "value": 229258
  },
  {
    "id": "NZL",
    "value": 769048
  },
  {
    "id": "OMN",
    "value": 462209
  },
  {
    "id": "PAK",
    "value": 364829
  },
  {
    "id": "PAN",
    "value": 145599
  },
  {
    "id": "PER",
    "value": 858586
  },
  {
    "id": "PHL",
    "value": 852645
  },
  {
    "id": "PNG",
    "value": 79468
  },
  {
    "id": "POL",
    "value": 60750
  },
  {
    "id": "PRI",
    "value": 270112
  },
  {
    "id": "PRT",
    "value": 317046
  },
  {
    "id": "PRY",
    "value": 911780
  },
  {
    "id": "QAT",
    "value": 329283
  },
  {
    "id": "ROU",
    "value": 7655
  },
  {
    "id": "RUS",
    "value": 669751
  },
  {
    "id": "RWA",
    "value": 888630
  },
  {
    "id": "ESH",
    "value": 358357
  },
  {
    "id": "SAU",
    "value": 85344
  },
  {
    "id": "SDN",
    "value": 414549
  },
  {
    "id": "SDS",
    "value": 528284
  },
  {
    "id": "SEN",
    "value": 264842
  },
  {
    "id": "SLB",
    "value": 857453
  },
  {
    "id": "SLE",
    "value": 254636
  },
  {
    "id": "SLV",
    "value": 553787
  },
  {
    "id": "ABV",
    "value": 129981
  },
  {
    "id": "SOM",
    "value": 258880
  },
  {
    "id": "SRB",
    "value": 745940
  },
  {
    "id": "SUR",
    "value": 585689
  },
  {
    "id": "SVK",
    "value": 564783
  },
  {
    "id": "SVN",
    "value": 768021
  },
  {
    "id": "SWZ",
    "value": 614740
  },
  {
    "id": "SYR",
    "value": 939468
  },
  {
    "id": "TCD",
    "value": 804884
  },
  {
    "id": "TGO",
    "value": 898922
  },
  {
    "id": "THA",
    "value": 399748
  },
  {
    "id": "TJK",
    "value": 599819
  },
  {
    "id": "TKM",
    "value": 800027
  },
  {
    "id": "TLS",
    "value": 532007
  },
  {
    "id": "TTO",
    "value": 476371
  },
  {
    "id": "TUN",
    "value": 569871
  },
  {
    "id": "TUR",
    "value": 913190
  },
  {
    "id": "TWN",
    "value": 583038
  },
  {
    "id": "TZA",
    "value": 231537
  },
  {
    "id": "UGA",
    "value": 638709
  },
  {
    "id": "UKR",
    "value": 504861
  },
  {
    "id": "URY",
    "value": 644902
  },
  {
    "id": "USA",
    "value": 496270
  },
  {
    "id": "UZB",
    "value": 445786
  },
  {
    "id": "VEN",
    "value": 592495
  },
  {
    "id": "VNM",
    "value": 360375
  },
  {
    "id": "VUT",
    "value": 39414
  },
  {
    "id": "PSE",
    "value": 116797
  },
  {
    "id": "YEM",
    "value": 210147
  },
  {
    "id": "ZAF",
    "value": 564479
  },
  {
    "id": "ZMB",
    "value": 743304
  },
  {
    "id": "ZWE",
    "value": 774410
  },
  {
    "id": "KOR",
    "value": 352591
  }
]

export default function Geography() {
  const { Ctheme } = useContext(ThemeContext);
  return (
    <div className={Ctheme === "dark" ? "dark" : ""}>
      <Box sx={{ height: "75vh", width: "91vw",border:"1px solid white",borderColor:Ctheme==="dark"?"white": '#444444',borderRadius:"10px"}}>
        <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
        data={data}
        features={geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        // enableGraticule={false}
        // graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: Ctheme==="dark"? "white":'#444444',
                itemOpacity: 0.85,
                symbolSize: 18
            }
        ]}
    />

      </Box>
    </div>
  );
}
