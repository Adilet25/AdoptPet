import React, { useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { TileLayer, Marker, Popup, MapContainer, useMap } from "react-leaflet";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./Map.css";
import up from "./assets/up.svg";
import down from "./assets/down.svg";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

const MapComponent = () => {
  const [defaultPosition, setDefaultPosition] = useState({
    lat: 42.882004,
    lng: 74.582748,
    zoom: 6,
  });

  const REGIONS = [
    {
      name: "Бишкек",
      regionID: 1,
    },
    {
      name: "Ош",
      regionID: 2,
    },
    {
      name: "Талас",
      regionID: 3,
    },
    {
      name: "Баткен",
      regionID: 4,
    },
    {
      name: "Джалал-Абад",
      regionID: 5,
    },
    {
      name: "Чуй",
      regionID: 6,
    },
    {
      name: "Нарын",
      regionID: 7,
    },
    {
      name: "Иссык-Куль",
      regionID: 8,
    },
  ];

  const PointsOfEveryRegions = [
    // ==============================<TALAS>==========================
    {
      regionID: 3,
      street: "г.Талас,  ул. Московская 219",
      coordinates: "42.5240293274541440-72.25580053495065",
    },
    {
      regionID: 3,
      street: "г.Талас,  ул. Исанова 102",
      coordinates: "42.50636880424727-72.23106120230412",
    },
    {
      regionID: 3,
      street: "г.Талас, ул. Панфилова 44в/2",
      coordinates: "42.5290909238542-72.2267371735",
    },

    // ==============================<TALAS>==========================
    // ==============================<Issyk-Kul>==========================
    {
      regionID: 8,
      street: "г.Каракол,  ул. Московская 219",
      coordinates: "42.49411313440055-78.40319588461472",
    },
    {
      regionID: 8,
      street: "г.Балыкчи,  ул. Панфилова 44в/2",
      coordinates: "42.46603958579763-76.2234152968552",
    },
    {
      regionID: 8,
      street: "г.Балыкчи,  ул. Бакаева 34",
      coordinates: "42.454094503294584-76.1583299426315",
    },
    // ==============================<Issyk-Kul>==========================
    // ==============================<Bishkek>==========================
    {
      regionID: 1,
      street: "г.Бишкек,  ул. Исанова 102",
      coordinates: "42.85970620270905-74.63749543870694",
    },
    {
      regionID: 1,
      street: "г.Бишкек,  ул. Панфилова 44в/2",
      coordinates: "42.842542263413236-74.55042350068382",
    },
    {
      regionID: 1,
      street: "г.Бишкек,  пр. Манаса 118",
      coordinates: "42.87760590086111-74.5647069420435",
    },

    // ==============================<Bishkek>==========================
    // ==============================<NARYN>==========================

    {
      regionID: 7,
      street: "г.Нарын,  ул. Исанова 102",
      coordinates: "41.36307700630246-75.50620381843703",
    },
    {
      regionID: 7,
      street: "г.Нарын,  мкр. Асанбай 49/81",
      coordinates: "41.36056324695576-75.54028541638789",
    },
    {
      regionID: 7,
      street: "г.Нарын,  ул. Бакаева 34",
      coordinates: "41.36460832926042-75.48819700123354",
    },

    // ==============================<NARYN>==========================
    // ==============================<CHUI>==========================

    {
      regionID: 6,
      street: "г.Токмок,  ул. Московская 219",
      coordinates: "42.8106951681265-75.3697753830605",
    },
    {
      regionID: 6,
      street: "г.Кара-Балта,  ул. Бакаева 34",
      coordinates: "42.80089990390147-73.84827350081898",
    },
    {
      regionID: 6,
      street: "г.Кемин,  пр. Манаса 118",
      coordinates: "42.78792332683915-75.7133566931208",
    },
    // ==============================<CHUI>==========================
    // ==============================<OSH>==========================

    {
      regionID: 2,
      street: "г.Ош,  ул. Московская 219",
      coordinates: "40.5361899-72.8033618",
    },
    {
      regionID: 2,
      street: "г. Ноокат,  ул. Бакаева 34",
      coordinates: "40.2657382-72.6178387",
    },
    {
      regionID: 2,
      street: "г.Кара-Суу,  мкр. Асанбай 49/81",
      coordinates: "40.70609689794273-72.88116139373179",
    },
    // ==============================<OSH>==========================
    // ==============================<DJALAL--ABAD>==========================
    {
      regionID: 5,
      street: "г.Таш-Кумыр,  ул. Московская 219",
      coordinates: "41.33861034057256-72.20324173285817",
    },
    {
      regionID: 5,
      street: "г.Кара-Куль,  мкр. Асанбай 49/81",
      coordinates: "41.63437750302887-72.68081851692443",
    },
    {
      regionID: 5,
      street: "г.Майлуу-Суу,  ул. Исанова 102",
      coordinates: "41.3304986-72.541961",
    },
    // ==============================<DJALAL--ABAD>==========================
    // ==============================<BATKEN>==========================

    {
      regionID: 4,
      street: "г.Баткен,  ул. Московская 219",
      coordinates: "40.06669653308012-70.83416113217774",
    },
    {
      regionID: 4,
      street: "г.Кадамжай,  ул. Панфилова 44в/2",
      coordinates: "40.1300143-71.726265",
    },
    {
      regionID: 4,
      street: "г.Лейлек,  ул. Исанова 102",
      coordinates: "39.87595-69.76444",
    },

    // ==============================<BATKEN>==========================
  ];

  var onPositionChange = (lat, zoom) => {
    console.log(`1)${lat[0]}, 2)${lat[1]} overall:${lat}`);
    console.log(lat);
    setDefaultPosition({
      lat: lat[0],
      lng: lat[1],
      zoom: [zoom],
    });
    console.log(lat);
  };

  var onChange = (e) => {
    var lat = e.currentTarget.value;
    var newLat = lat.split("-", 2);
    var zoom = 16;

    if (onChange) {
      onPositionChange(newLat, zoom);
    }
  };

  const [selected, setSelected] = useState(false);
  const [oneRegion, setOneRegion] = useState("");
  const [isOpen1, setIsOpen1] = useState(false || true);
  const [isOpen2, setIsOpen2] = useState(false || true);

  const getOneRegion = (item) => {
    setSelected(true);
    setOneRegion(item);
  };

  const ChangeMapCenter = ({ center, zoom }) => {
    const map = useMap();
    map.flyTo(center, zoom);
  };

  return (
    <div className="">
      <div className="flex justify-between mt-10 ml-5">
        <div>
          <div class="flex justify-center">
            <div class=" xl:w-96 mr-11">
              <h1 className="cursor-default font-semibold text-3xl mb-5">
                Каталог
              </h1>
              <div className="mb-5">
                <h1 className="cursor-default font-semibold text-xl mb-2">
                  Выбрать Область
                </h1>
                <span className="select-wrapper">
                  <select
                    className="minimal"
                    onChange={(e) => {
                      getOneRegion(e.target.value);
                      // setIsOpen1(false);
                    }}>
                    <option value="" disabled selected className="hidden">
                      Область
                    </option>

                    {REGIONS.map((item) => (
                      <option key={item.name} value={item.regionID}>
                        {item.name}
                      </option>
                    ))}
                    {/* <option value="gg">jj</option> */}
                    {/* <img src={up} alt="" className="absolute" /> */}
                  </select>
                </span>
              </div>

              <div className="mb-5">
                <h1 className="cursor-default font-semibold text-xl mb-2">
                  Выбрать Категорию
                </h1>
                <span className="select-wrapper">
                  <select
                    onChange={onChange}
                    disabled={selected ? false : true}
                    onFocus={() => setIsOpen2(true)}
                    onBlur={() => setIsOpen2(true)}
                    onClick={() => setIsOpen2(!isOpen2)}
                    className="minimal"
                    aria-label=".form-select-sm example">
                    <option value="" disabled selected className="hidden">
                      Регион не выбран
                    </option>
                    {PointsOfEveryRegions.map((item) => {
                      if (item.regionID == oneRegion) {
                        return (
                          <option
                            value={item.coordinates}
                            key={item.coordinates}
                            className="leading-8 tracking-0.15px outline outline-0  font-medium text-footerBlueText">
                            {item.street}
                          </option>
                        );
                      }
                    })}
                  </select>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <MapContainer
              scrollWheelZoom={true}
              className="w-[50rem] h-[20rem] rounded-[0.5rem]"
              zoom={defaultPosition.zoom}
              center={[defaultPosition.lat, defaultPosition.lng]}>
              <ChangeMapCenter
                center={[defaultPosition.lat, defaultPosition.lng]}
                zoom={defaultPosition.zoom}
              />
              <TileLayer
                // attribution="&amp;copy"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {/* <Basemap zoom={this.state.zoom} onChange={this.onZoomChange} /> */}
              <Marker position={[defaultPosition.lat, defaultPosition.lng]}>
                <div className="w-[55vmax] h-[35vmax]"></div>
              </Marker>
            </MapContainer>
          </div>
          <div className="mt-14">
            <p className="text-footerBlueText font-medium font-ourFont text-base">
              График работы всех учреждений:
              <span className="font-extrabold">
                в будние дни, с 9:00 до 18:00
              </span>
              <br />
              Единая справочная служба:{" "}
              <span className="font-extrabold">8585</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
