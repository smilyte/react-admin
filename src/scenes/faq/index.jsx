import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { tokens } from "../../theme";

import Header from "../../components/Header";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Luctus posuere facilisi integer dui aptent, ultricies metus id.
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Cupcake ipsum dolor sit amet. Chupa chups muffin icing cake I love. Sweet roll pie cupcake icing croissant halvah I love chocolate bar pie.
                    Tart fruitcake sweet I love sweet tiramisu fruitcake cake. Cookie carrot cake lollipop topping ice cream cake chocolate. Sweet roll pastry bonbon sweet roll I love marshmallow carrot cake.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Sociosqu facilisis ultrices class litora, pharetra lobortis.
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Cupcake ipsum dolor sit amet I love shortbread. Sweet roll sesame snaps pie tart I love tiramisu danish croissant muffin. Dessert ice cream gummi bears muffin cheesecake apple pie cake. Carrot cake carrot cake muffin fruitcake jelly-o bonbon.
                    Jelly icing I love bear claw oat cake. Brownie I love cookie pie caramels. Fruitcake muffin lemon drops dessert candy lemon drops tiramisu halvah. Candy canes jelly-o dessert pastry candy chupa chups I love gummi bears jelly-o.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Turpis nec nullam augue erat habitant, lacinia fermentum arcu.
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Tart jujubes jujubes carrot cake biscuit pie gummies shortbread. Muffin cupcake I love pastry cake ice cream. Pudding gingerbread sweet cookie cotton candy gummi bears icing. Chocolate cake dragée marzipan apple pie lollipop muffin topping pudding.
                    Macaroon sugar plum marzipan fruitcake cake. Tiramisu soufflé sweet oat cake pie. I love jelly beans jelly-o macaroon cookie cake I love. Tart soufflé chocolate bar sesame snaps shortbread fruitcake.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Facilisi odio scelerisque dictum non mollis, aptent sagittis mauris.
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Chocolate bar I love sugar plum gingerbread sweet macaroon. Icing jelly gummi bears cake tart pie marshmallow. Jelly cheesecake dragée marzipan fruitcake. Jelly beans I love bear claw fruitcake cheesecake liquorice donut ice cream.
                    Pudding pudding gummi bears tart sweet. Shortbread jelly-o ice cream cookie tootsie roll carrot cake. Lemon drops lollipop danish gingerbread apple pie sesame snaps lollipop jelly-o pie. Tiramisu powder bear claw I love cheesecake I love.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Dignissim sociis aliquam nisi semper, pellentesque egestas
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Toffee bear claw I love jelly-o dessert topping. Jelly-o jelly beans jelly powder biscuit. Biscuit I love candy candy ice cream sesame snaps chocolate bar. I love fruitcake lemon drops bonbon jelly topping sweet roll.
                    Lollipop cheesecake halvah dragée liquorice bonbon bear claw. Sugar plum marshmallow I love marshmallow toffee. Cotton candy I love halvah halvah liquorice.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Ullamcorper tempus tellus neque tincidunt viverra, iaculis luctus primis
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Bear claw oat cake chocolate cake cake chupa chups marzipan tart gummi bears. Chupa chups gummies cheesecake liquorice I love chocolate cake powder bear claw gingerbread. Marshmallow sweet cupcake sweet oat cake tootsie roll shortbread pie. Gingerbread cheesecake sugar plum marzipan icing.
                    Bonbon I love bonbon pastry I love croissant. Lemon drops I love candy cake I love apple pie cupcake muffin wafer. Oat cake marzipan I love lemon drops I love jujubes lemon drops. Bonbon pastry sweet muffin dessert I love sweet roll marshmallow.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    Blandit posuere nostra dapibus integer, parturient donec tristique.
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Bear claw chocolate toffee cookie sesame snaps gummi bears tart donut. Tart chocolate cake I love I love candy canes dragée croissant. Cookie brownie gingerbread jelly-o pastry cake. Cupcake caramels cookie halvah candy canes.
                    Brownie sweet roll lollipop donut shortbread shortbread. Brownie halvah I love brownie cupcake candy canes macaroon I love pudding. Halvah sweet sesame snaps cotton candy cheesecake cake. Halvah croissant dragée I love jujubes dragée wafer.
                </Typography>
            </AccordionDetails>
        </Accordion>

        </Box>
  );
};

export default FAQ;