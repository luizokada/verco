import { Card, Grid, Text, Divider, Button, Row} from "@nextui-org/react";
import CustomButton from "../../components/cutomButton/index"

export default function PlanCard(props){
    const {title, about, price} = props
    return(
        <Grid xs={3}>
          <Card css={{ mw: "330px" }}>
            <Card.Header>
              <h3 b>{title}</h3>
            </Card.Header>
            <Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text>
                {about}
              </Text>
            </Card.Body>
            <Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text b>
                R$ {price}
              </Text>
            </Card.Body>
            <Divider />
            <Card.Footer>
              <Row justify="flex-end">
                <Button size="sm" light>
                  Cancel
                </Button>
                <CustomButton text="Ser Parceiro"/>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
    )
}

